import styles from './LanguageCurrencySelector.module.css';
import PropTypes from 'prop-types';
import { useContext, useRef, useState } from 'react';
import { ThemeContext } from '../../../../context/ThemeContext';
import { currencyList } from '../../../../lib/data/currency';
import { languageList } from '../../../../lib/data/languages';
import { useTranslation } from 'react-i18next';
import useClickOutside from '../../../../lib/hooks/useClickOutside';
import LanguageIcon from '../../icons/language/LanguageIcon';
import { useCurrency } from '../../../../context/CurrencyContext';

export default function LanguageCurrencySelector({ closeNavbar }) {
  const [show, setShow] = useState(false);
  const languageDropdownRef = useRef(null);
  const { i18n } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const { currency, setCurrency } = useCurrency();

  useClickOutside(languageDropdownRef, () => setShow(false));

  const handleShow = () => {
    setShow(!show);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShow(false);
    closeNavbar();
  };

  const changeCurrency = (currency) => {
    setCurrency(currency);
    setShow(false);
    closeNavbar();
  };

  return (
    <div ref={languageDropdownRef} className={styles.languageCurrencySelector}>
      <button onClick={handleShow} aria-label="Change language">
        <LanguageIcon size="32" variant={theme === 'dark' ? 'gray' : 'black'} />
      </button>
      <div className={`${show ? styles.show : ''} ${styles.dropdown}`}>
        <div className={styles.languageCont}>
          <span className={styles.title}>Language</span>
          <ul>
            {languageList?.map(({ value, id, label }) => (
              <li
                onClick={() => changeLanguage(value)}
                key={id}
                className={`${i18n.language === value || (value === 'en' && i18n.language === 'en-US') ? styles.activeLanguage : ''}`}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.currencyCont}>
          <span className={styles.title}>Currency</span>
          <ul>
            {currencyList?.map(({ id, value, label }) => (
              <li
                key={id}
                onClick={() => changeCurrency(value)}
                className={currency === value ? styles.activeCurrency : ''}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

LanguageCurrencySelector.propTypes = {
  closeNavbar: PropTypes.func,
};
