import styles from './NavbarThemeToggle.module.css';
import { ThemeContext } from '../../../../context/ThemeContext';
import { useContext } from 'react';
import ThemeIcon from '../icon/ThemeIcon';

export default function NavbarThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={styles.navbarThemeToggle}
      onClick={toggleTheme}
      aria-label="Change theme"
    >
      <ThemeIcon theme={theme} width={32} height={32} />
    </button>
  );
}
