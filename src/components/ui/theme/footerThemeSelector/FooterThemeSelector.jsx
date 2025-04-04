import styles from './FooterThemeSelector.module.css';
import { useContext } from 'react';
import ThemeIcon from '../icon/ThemeIcon';
import { ThemeContext } from '../../../../context/ThemeContext';

export default function FooterThemeSelector() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      className={`${styles.footerThemeSelector} ${styles[theme]}`}
      onClick={toggleTheme}
      aria-label="Change theme"
    >
      <div className={styles.themeIcon}>
        <ThemeIcon theme={theme} />
      </div>
    </button>
  );
}
