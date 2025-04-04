import styles from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import useScrolled from '../../lib/hooks/useScrolled';
import logoDark from '../../assets/images/logo_dark.png';
import logoLight from '../../assets/images/logo_light.png';
import AuthLinks from '../../components/ui/authLinks/AuthLinks';
import Hamburger from '../../components/ui/buttons/hamburger/Hamburger';
import LanguageCurrencySelector from '../../components/ui/locale/languageCurrencySelector/LanguageCurrencySelector';
import NavbarThemeToggle from '../../components/ui/theme/navbarThemeToggle/NavbarThemeToggle';
import { ThemeContext } from '../../context/ThemeContext';

/**
 * Main responsive navbar component
 *
 * Features:
 * - Dynamic styles based on scroll position
 * - Accessible keyboard navigation
 * - Responsive hamburger menu
 * - Multilingual support
 *
 * @returns {JSX.Element}
 */
export default function Navbar() {
  const { t } = useTranslation();
  const scrolled = useScrolled(30);
  const { theme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const navRef = useRef(null);

  const isAuthenticated = true; // Replace with actual auth logic

  const handleToggle = useCallback(() => {
    setToggle((prev) => !prev);
    document.body.style.overflow = toggle ? 'auto' : 'hidden'; // Prevent background scroll
  }, [toggle]);

  const handleClose = useCallback(() => {
    setToggle(false);
    document.body.style.overflow = 'auto';
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (toggle) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [toggle, handleClose]);

  const getNavLinkClass = ({ isActive }) => (isActive ? styles.activeNav : '');

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${toggle ? styles.activeNav : ''}`}
      role="banner"
    >
      <nav ref={navRef} role="navigation" aria-label="Main navigation">
        <Link className={styles.logoCont} to="/" aria-label="Go to homepage">
          <img
            className={styles.logo}
            src={theme === 'dark' ? logoDark : logoLight}
            alt="iEscrow logo"
            draggable={false}
            loading="eager"
          />
        </Link>

        <Hamburger
          handleToggle={handleToggle}
          toggle={toggle}
          aria-expanded={toggle}
        />

        <ul className={styles.menu} role="menu">
          <li className={styles.navLink} role="menuitem">
            <NavLink to="/" onClick={handleClose} className={getNavLinkClass}>
              {t('Navbar.roadmap')}
            </NavLink>
          </li>

          <li className={styles.navLink} role="menuitem">
            <NavLink
              to="/marketplace"
              onClick={handleClose}
              className={getNavLinkClass}
            >
              {t('Navbar.marketplace')}
            </NavLink>
          </li>

          <AuthLinks isAuthenticated={isAuthenticated} onClose={handleClose} />

          <li role="menuitem">
            <LanguageCurrencySelector closeNavbar={handleClose} />
          </li>

          <li role="menuitem">
            <Link
              to="#"
              className={styles.button}
              onClick={handleClose}
              aria-label="Create an escrow"
            >
              {t('Navbar.createEscrow')}
            </Link>
          </li>

          <li className={styles.settings} role="menuitem">
            <NavbarThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
