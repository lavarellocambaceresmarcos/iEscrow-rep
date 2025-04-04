import styles from './AuthLinks.module.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import AuthDropdown from '../authDropdown/AuthDropdown';

export default function AuthLinks({ isAuthenticated, onClose }) {
  const { t } = useTranslation();

  return isAuthenticated ? (
    <li className={styles.authLink}>
      <AuthDropdown />
    </li>
  ) : (
    <ul>
      <li className={styles.authLink}>
        <NavLink onClick={onClose} to="/signup" aria-label="Sign up">
          {t('Navbar.register')}
        </NavLink>
      </li>
      <li className={styles.authLink}>
        <NavLink onClick={onClose} to="/signin" aria-label="Sign in">
          {t('Navbar.login')}
        </NavLink>
      </li>
    </ul>
  );
}

AuthLinks.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
