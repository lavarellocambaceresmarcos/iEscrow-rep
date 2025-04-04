import React, { memo } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CurrencyProvider } from '../context/CurrencyContext';
import { HelmetProvider } from 'react-helmet-async';

/**
 * AppProviders is a wrapper component that provides the necessary contexts to the app.
 * It wraps the application with:
 * - BrowserRouter for routing
 * - CurrencyProvider for currency context
 * - HelmetProvider for managing document head metadata
 * - ThemeProvider for theme-related context
 *
 * @param {React.PropsWithChildren} props - The children to be wrapped by the providers.
 * @returns {JSX.Element} - The wrapped application component.
 */
const AppProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <CurrencyProvider>
        <HelmetProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </HelmetProvider>
      </CurrencyProvider>
    </BrowserRouter>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(AppProviders);

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
