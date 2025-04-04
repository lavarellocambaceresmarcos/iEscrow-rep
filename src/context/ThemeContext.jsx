import React, { createContext, useEffect, useMemo } from 'react';
import useLocalStorage from '../lib/hooks/useLocalStorage';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

/**
 * ThemeProvider component that provides theme context to its children.
 * It stores the selected theme in localStorage and applies it to the document.
 *
 * @param {React.PropsWithChildren} props - The props for the component, which include children.
 * @returns {JSX.Element} - The provider component wrapping its children.
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
