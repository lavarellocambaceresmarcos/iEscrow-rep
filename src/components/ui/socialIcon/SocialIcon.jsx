import styles from './SocialIcon.module.css';
import PropTypes from 'prop-types';

export default function SocialIcon({ children, link, blank = true, ...props }) {
  return (
    <a
      className={styles.icon}
      href={link}
      target={blank ? '_blank' : '_self'}
      rel="noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}

SocialIcon.propTypes = {
  children: PropTypes.node,
  link: PropTypes.string,
  blank: PropTypes.bool,
};
