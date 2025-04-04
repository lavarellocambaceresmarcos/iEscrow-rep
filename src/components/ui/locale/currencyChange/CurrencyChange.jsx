import { useContext, useRef, useState } from 'react';
import { useCurrency } from '../../../../context/CurrencyContext';
import styles from './CurrencyChange.module.css';
import CurrencyIcon from '../../icons/currency/CurrencyIcon';
import { currencyList } from '../../../../lib/data/currency';
import useClickOutside from '../../../../lib/hooks/useClickOutside';
import { ThemeContext } from '../../../../context/ThemeContext';

export default function CurrencyChange() {
  const { theme } = useContext(ThemeContext);
  const { currency, setCurrency } = useCurrency();
  const [show, setShow] = useState(false);
  const currencyDropdownRef = useRef(null);

  useClickOutside(currencyDropdownRef, () => setShow(false));

  const handleChange = (value) => {
    setCurrency(value);
    setShow(false);
  };

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className={styles.currencyChange} ref={currencyDropdownRef}>
      <button onClick={handleShow} aria-label="Change currency">
        <CurrencyIcon theme={theme} />
        <span>{currency}</span>
      </button>
      <ul className={`${show ? styles.show : ''} ${styles.dropdown}`}>
        {currencyList?.map(({ value, id, label }) => (
          <li
            onClick={() => handleChange(value)}
            key={id}
            className={currency === value ? styles.active : ''}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}
