import PropTypes from 'prop-types';
import styles from './HomeBanner.module.css';
import { motion } from 'framer-motion';
import { Trans } from 'react-i18next';
import logoDark from '../../../assets/images/logo_dark.png';
import logoLight from '../../../assets/images/logo_light.png';
import halfArrowIcon from '../../../assets/icons/halfArrowIcon.png';
import CustomButton from '../../ui/buttons/customButton/CustomButton';
import GradientTitle from '../../ui/gradientTitle/GradientTitle';
import VideoIcon from '../../ui/icons/videoIcon/VideoIcon';
import { slowFadeInBottomToTop } from '../../../lib/animations/fadeInVariants';

HomeBanner.propTypes = {
  t: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

/**
 * Home main banner component
 *
 * @returns {JSX.Element}
 */
export default function HomeBanner({ t, theme }) {
  return (
    <section className={`${styles.homeBanner} ${styles[theme]}`}>
      <motion.div
        className={styles.content}
        variants={slowFadeInBottomToTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <img
          className={styles.logo}
          src={theme === 'dark' ? logoDark : logoLight}
          alt="iEscrow logo"
          draggable={false}
          loading="eager"
        />
        <span className={styles.motto}>{t('Home.Banner.motto')}</span>
        <h1>
          <Trans i18nKey="Home.Banner.title">
            <GradientTitle></GradientTitle>
          </Trans>
        </h1>
        <p>{t('Home.Banner.description')}</p>
        <div className={styles.buttonsCont}>
          <CustomButton to="#" variant="secondary" aria-label="Watch video">
            <VideoIcon theme={theme} />
            {t('Home.Banner.watchVideo')}
          </CustomButton>
          <CustomButton to="#" variant="primary" aria-label="Create escrow">
            <img src={halfArrowIcon} alt="half arrow icon" />
            {t('Home.Banner.createEscrow')}
          </CustomButton>
        </div>
      </motion.div>
    </section>
  );
}
