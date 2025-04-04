import styles from './StoreButton.module.css';
import PropTypes from 'prop-types';

export default function StoreButton({
  icon,
  platform,
  link,
  text,
  blank = true,
}) {
  return (
    <a
      href={link}
      target={blank ? '_blank' : '_self'}
      rel="noopener noreferrer"
      className={styles.button}
      aria-label={`Enlace a ${platform}: ${text}`}
    >
      {icon}
      <span>
        <p>{text}</p>
        <span className={styles.platform}>{platform}</span>
      </span>
    </a>
  );
}

StoreButton.propTypes = {
  icon: PropTypes.node,
  platform: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string,
  blank: PropTypes.bool,
};
