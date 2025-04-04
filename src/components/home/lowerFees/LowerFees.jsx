import PropTypes from 'prop-types';
import styles from './LowerFees.module.css';

import CountdownTimer from '../../../features/countdown/components/CountdownTimer';
import { useCountdown } from '../../../features/countdown/hooks/useCountdown';
import {
  exchangeLaunchDate,
  tokenLaunchDate,
  tokenPresaleDate,
} from '../../../lib/constants/coundown';

// assets
import halfArrow from '../../../assets/icons/halfArrowIcon.png';
import lowerFeesVideo from '../../../assets/videos/lower_fees_bg.mp4';
import escrowCoin from '../../../assets/images/lowerfees/escrow_coin.png';

// animations
import { motion } from 'framer-motion';
import { fadeIn } from '../../../lib/animations/fadeInVariants';

LowerFees.propTypes = {
  t: PropTypes.func.isRequired,
};

export default function LowerFees({ t }) {
  const tokenPresaleCountdown = useCountdown(tokenPresaleDate);
  const tokenLaunchCountdown = useCountdown(tokenLaunchDate);
  const exchangeLaunchCountdown = useCountdown(exchangeLaunchDate);

  const events = [
    {
      countdown: tokenPresaleCountdown,
      message: t('Home.LowerFees.presaleLaunch'),
      startsIn: t('Home.LowerFees.presaleStartsIn'),
    },
    {
      countdown: tokenLaunchCountdown,
      message: t('Home.LowerFees.tokenLaunch'),
      startsIn: t('Home.LowerFees.tokenStartsIn'),
    },
    {
      countdown: exchangeLaunchCountdown,
      message: t('Home.LowerFees.exchangeLaunch'),
      startsIn: t('Home.LowerFees.exchangeStartsIn'),
    },
  ];

  const allEventsFinished = events.every((event) => event.countdown === null);

  const activeEvent = events.find((event) => event.countdown !== null);

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={styles.lowerFees}
    >
      <span className={styles.comingSoon}>
        {allEventsFinished
          ? t('Home.LowerFees.launched')
          : activeEvent
            ? activeEvent.message
            : t('Home.LowerFees.comingSoon')}
      </span>

      <video autoPlay loop muted className={styles.video}>
        <source src={lowerFeesVideo} type="video/mp4" />
        <track
          default
          kind="captions"
          srcLang="en"
          src={lowerFeesVideo}
          label="English"
        />
        Your browser does not support the video tag.
      </video>

      <div className={styles.content}>
        <div className={styles.text}>
          <h2>
            <span>{t('Home.LowerFees.titleSpan')}</span>
            {t('Home.LowerFees.title')}
          </h2>
          <div className={styles.coin}>
            <img src={escrowCoin} alt="escrow coin" />
            <span>{t('Home.LowerFees.coin')}</span>
          </div>
        </div>

        <div className={styles.counterdown}>
          {activeEvent ? (
            <>
              <p className={styles.startsIn}>{activeEvent.startsIn}</p>
              <CountdownTimer
                timeLeft={activeEvent.countdown}
                variant="lg"
                color="white"
              />
            </>
          ) : (
            <p className={styles.endMessage}>
              {t('Home.LowerFees.endMessage')}
            </p>
          )}

          <div className={styles.buttons}>
            <a href="#" target="blank" aria-label="link to website">
              <img src={halfArrow} alt="half arrow icon" />
              {t('Home.LowerFees.website')}
            </a>
            <a href="#" target="blank" aria-label="link to whitepaper">
              <img src={halfArrow} alt="half arrow icon" />
              {t('Home.LowerFees.whitepaper')}
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
