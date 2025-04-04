import styles from './IconText.module.css';
import halfArrowIcon from '../../../assets/icons/halfArrowIcon.png';

import PropsType from 'prop-types';

export default function IconText({ children }) {
  return (
    <div className={styles.iconText}>
      <img src={halfArrowIcon} alt="decorative icon" />
      <p>{children}</p>
    </div>
  );
}

IconText.propTypes = {
  children: PropsType.node.isRequired,
};
