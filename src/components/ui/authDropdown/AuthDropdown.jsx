import styles from './AuthDropdown.module.css';
import { Link } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import useClickOutside from '../../../lib/hooks/useClickOutside';
import AuthIcon from '../icons/authIcon/AuthIcon';

export default function AuthDropdown() {
  const [active, setActive] = useState(false);
  const authDropdownRef = useRef(null);
  const { theme } = useContext(ThemeContext);

  useClickOutside(authDropdownRef, () => setActive(false));

  return (
    <button
      ref={authDropdownRef}
      onClick={() => setActive(!active)}
      className={`${styles.authButton} ${active ? styles.show : ''}`}
      aria-haspopup="true"
      aria-expanded={active ? 'true' : 'false'}
      aria-controls="user-menu"
      aria-label="User menu"
    >
      <AuthIcon size="32" variant={theme === 'dark' ? 'gray' : 'black'} />
      <ul>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>Logout</li>
      </ul>
    </button>
  );
}
