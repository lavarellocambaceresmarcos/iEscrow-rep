import styles from './CountdownTimer.module.css';
import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export default function CountdownTimer({ timeLeft, variant = 'sm', color }) {
  const { t } = useTranslation();

  if (!timeLeft) {
    return null;
  }

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className={`${styles.countdown} ${styles[variant]} ${styles[color]}`}>
      <div className={styles.timerContainer}>
        <span>{days}</span>
        <p>{t('Home.Countdown.days')}</p>
      </div>
      <div className={styles.timerContainer}>
        <span>{hours}</span>
        <p>{t('Home.Countdown.hours')}</p>
      </div>
      <div className={styles.timerContainer}>
        <span>{minutes}</span>
        <p>{t('Home.Countdown.minutes')}</p>
      </div>
      <div className={styles.timerContainer}>
        <span>{seconds}</span>
        <p>{t('Home.Countdown.seconds')}</p>
      </div>
    </div>
  );
}

CountdownTimer.propTypes = {
  timeLeft: PropTypes.shape({
    days: PropTypes.string,
    hours: PropTypes.string,
    minutes: PropTypes.string,
    seconds: PropTypes.string,
  }),
  variant: PropTypes.string.isRequired,
  color: PropTypes.string,
};
