import React from 'react';
import styles from './InfoCard.module.css';
import PropTypes from 'prop-types';
import GradientTitle from '../../gradientTitle/GradientTitle';

/**
 * Reusable card for displaying info icon, title and text
 * @param {{icon: string, title: string, text: string, lg: boolean}}
 * @returns {JSX.Element}
 */
export default function InfoCard({
  children,
  title,
  title2,
  text,
  lg = false,
}) {
  return (
    <div className={`${styles.infoCard} ${styles[lg ? 'lg' : 'sm']}`}>
      {children}
      <div className={styles.titleCont}>
        <GradientTitle>{title}</GradientTitle>
        {title2 && <GradientTitle>{title2}</GradientTitle>}
      </div>
      <p>{text}</p>
    </div>
  );
}

InfoCard.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  title2: PropTypes.string || undefined,
  text: PropTypes.string,
  lg: PropTypes.bool,
};
