import styles from './CustomButton.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  to: PropTypes.string,
};

/**
 * Reusable main custom button
 * @param {{children: React.ReactNode, variant?: 'primary' | 'secondary', to?: string}}
 * @returns {JSX.Element}
 */
export default function CustomButton({
  children,
  variant = 'primary',
  to,
  ...props
}) {
  return (
    <Link className={`${styles.button} ${styles[variant]}`} to={to} {...props}>
      {children}
    </Link>
  );
}
