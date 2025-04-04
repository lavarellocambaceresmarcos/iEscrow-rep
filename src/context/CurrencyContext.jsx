import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';

const CurrencyContext = createContext();

// TODO => Add currency logic to a global state like Redux or Zustand.
/**
 * CurrencyProvider component that provides currency context to its children.
 * It stores the selected currency in localStorage to persist between sessions.
 *
 * @param {React.PropsWithChildren} props - The props for the component, which include children.
 * @returns {JSX.Element} - The provider component wrapping its children.
 */
export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(() => {
    try {
      // Get currency from localStorage with a fallback to 'USD' if not found
      const storedCurrency = localStorage.getItem('currency');
      return storedCurrency ? storedCurrency : 'USD';
    } catch (error) {
      console.error('Error accessing localStorage:', error);
      return 'USD'; // Fallback to USD if there's an error
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('currency', currency);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  }, [currency]);

  const value = useMemo(() => ({ currency, setCurrency }), [currency]);

  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

/**
 * Custom hook to use currency context
 *
 * @returns {object} - The currency context value containing currency and setCurrency function.
 */
export const useCurrency = () => useContext(CurrencyContext);

CurrencyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
