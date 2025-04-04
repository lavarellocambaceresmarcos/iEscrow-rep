import PropTypes from 'prop-types';
import styles from './Roadmap.module.css';
import { motion } from 'framer-motion';
import { roadmapSlideVariants } from '../../../lib/animations/slideVariants';
import { roadmapItemVariants } from '../../../lib/animations/itemVariants';

import GradientTitle from '../../ui/gradientTitle/GradientTitle';
import CountdownTimer from '../../../features/countdown/components/CountdownTimer';
import { useCountdown } from '../../../features/countdown/hooks/useCountdown';

//assets
import timeLine from '../../../assets/images/roadmap/timeline.png';
import mobileLine1 from '../../../assets/images/roadmap/line_1_mobile.svg';
import mobileLine2 from '../../../assets/images/roadmap/line_2_mobile.svg';
import { mediumFadeInLeftToRight } from '../../../lib/animations/fadeInVariants';
import {
  exchangeLaunchDate,
  tokenLaunchDate,
  tokenPresaleDate,
} from '../../../lib/constants/coundown';

Roadmap.propTypes = {
  t: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

export default function Roadmap({ t, theme }) {
  const tokenPresaleCountdown = useCountdown(tokenPresaleDate);
  const tokenLaunchCountdown = useCountdown(tokenLaunchDate);
  const exchangeLaunchCountdown = useCountdown(exchangeLaunchDate);

  const roadmapEvents = [
    {
      id: 'exchangeLaunch',
      title: t('Home.Roadmap.exchangeLaunch.title'),
      currency: t('Home.Roadmap.exchangeLaunch.currency'),
      description: t('Home.Roadmap.exchangeLaunch.description'),
      date: t('Home.Roadmap.exchangeLaunch.date'),
      countdown: exchangeLaunchCountdown,
      isCountdownVisible:
        tokenLaunchCountdown === null && tokenPresaleCountdown === null,
    },
    {
      id: 'tokenLaunch',
      title: t('Home.Roadmap.tokenLaunch.title'),
      currency: t('Home.Roadmap.tokenLaunch.currency'),
      description: t('Home.Roadmap.tokenLaunch.description'),
      date: t('Home.Roadmap.tokenLaunch.date'),
      countdown: tokenLaunchCountdown,
      isCountdownVisible: tokenPresaleCountdown === null,
    },
    {
      id: 'tokenPresale',
      title: t('Home.Roadmap.tokenPresale.title'),
      currency: t('Home.Roadmap.tokenPresale.currency'),
      description: t('Home.Roadmap.tokenPresale.description'),
      date: t('Home.Roadmap.tokenPresale.date'),
      countdown: tokenPresaleCountdown,
      isCountdownVisible: tokenPresaleCountdown !== null,
    },
  ];

  return (
    <section className={`${styles.roadmap} ${styles[theme]}`}>
      <div className={styles.titleCont}>
        <motion.h2
          variants={mediumFadeInLeftToRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: '-50px' }}
        >
          <GradientTitle>Roadmap</GradientTitle>
        </motion.h2>
      </div>

      <div className={styles.timeLine}>
        <img
          src={timeLine}
          alt="roadmap time line"
          loading="lazy"
          draggable={false}
        />
      </div>

      <motion.ul
        variants={roadmapSlideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5, margin: '-50px' }}
        className={styles.list}
      >
        {roadmapEvents.map(
          ({
            id,
            title,
            currency,
            description,
            date,
            countdown,
            isCountdownVisible,
          }) => (
            <motion.li key={id} className={styles[id]}>
              <motion.div
                variants={roadmapItemVariants}
                custom={
                  id === 'tokenPresale' ? 0 : id === 'tokenLaunch' ? 1 : 2
                }
                className={styles.container}
              >
                <h3>{title}</h3>
                <p>{currency}</p>
                <p>{description}</p>
                <span className={styles.date}>{date}</span>
                {isCountdownVisible && (
                  <CountdownTimer timeLeft={countdown} variant="sm" />
                )}
              </motion.div>
              {id !== 'tokenPresale' && (
                <img
                  src={id === 'exchangeLaunch' ? mobileLine1 : mobileLine2}
                  alt="decoration line"
                />
              )}
            </motion.li>
          )
        )}
      </motion.ul>
    </section>
  );
}
