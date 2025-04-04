import { useState, useEffect } from 'react';

/**
 * Custom hook for managing state synchronized with `localStorage`.
 *
 * @param {string} key - The key under which the value is stored in `localStorage`.
 * @param {*} initialValue - The initial value to use if the key does not exist in `localStorage`.
 * @returns {[any, Function]} Returns the current value and a function to update it.
 *
 * @example
 * const [name, setName] = useLocalStorage('username', 'Guest');
 *
 * return (
 *   <div>
 *     <input value={name} onChange={(e) => setName(e.target.value)} />
 *   </div>
 * );
 */
const useLocalStorage = (key, initialValue) => {
  const isBrowser = typeof window !== 'undefined';

  const [storedValue, setStoredValue] = useState(() => {
    if (!isBrowser) return initialValue;

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (isBrowser) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Sync with other tabs
  useEffect(() => {
    if (!isBrowser) return;

    const handleStorageChange = (event) => {
      if (event.key === key) {
        try {
          setStoredValue(
            event.newValue ? JSON.parse(event.newValue) : initialValue
          );
        } catch (error) {
          console.error(`Error syncing localStorage key "${key}":`, error);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [key, initialValue]);

  return [storedValue, setValue];
};

export default useLocalStorage;
