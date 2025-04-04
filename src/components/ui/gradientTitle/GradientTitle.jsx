import styles from './GradientTitle.module.css';
import PropsType from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';

export default function GradientTitle({ children }) {
  const { theme } = useContext(ThemeContext);
  return (
    <span className={`${styles.gradientTitle} ${styles[theme]}`}>
      {children}
    </span>
  );
}

GradientTitle.propTypes = {
  children: PropsType.node,
};
