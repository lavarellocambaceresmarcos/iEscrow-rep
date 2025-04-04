import PropTypes from 'prop-types';
import styles from './TradeOnTheGo.module.css';
import phone from '../../../assets/images/tradeOnTheGo/trade_on_the_go_desktop.png';
import qr from '../../../assets/images/qr.png';
import { Trans } from 'react-i18next';
import GradientTitle from '../../ui/gradientTitle/GradientTitle';
import AppStoreIcon from '../../ui/icons/appStore/AppStoreIcon';
import GooglePlayIcon from '../../ui/icons/googlePlayIcon/GooglePlayIcon';
import StoreButton from '../../ui/buttons/storeButton/StoreButton';
import { motion } from 'framer-motion';
import { scaleVariant } from '../../../lib/animations/scaleVariants';
import { fadeInRightToLeft } from '../../../lib/animations/fadeInVariants';
import { slideVariants } from '../../../lib/animations/slideVariants';

TradeOnTheGo.propTypes = {
  t: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

/**
 * Home Trade on the go component, that contains the title, qr code and a phone image
 *
 * @returns {JSX.Element}
 */
export default function TradeOnTheGo({ t, theme }) {
  return (
    <section className={styles.tradeOnTheGo}>
      <motion.img
        variants={scaleVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={styles.phone}
        src={phone}
        alt="phone"
        loading="lazy"
      />

      <motion.div
        variants={slideVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={styles.textContainer}
      >
        {/* Title */}
        <motion.h2 variants={fadeInRightToLeft}>
          <Trans i18nKey="Home.TradeOnTheGo.title">
            <GradientTitle></GradientTitle>
          </Trans>
        </motion.h2>

        {/* QR Code */}
        <motion.div className={styles.qrContainer} variants={fadeInRightToLeft}>
          <img src={qr} alt="qr code phone" loading="lazy" />
          <p>
            <Trans i18nKey="Home.TradeOnTheGo.description">
              <span></span>
            </Trans>
          </p>
        </motion.div>

        {/* Platform Buttons */}
        <motion.div
          variants={fadeInRightToLeft}
          className={styles.platformButtons}
        >
          <StoreButton
            icon={<AppStoreIcon theme={theme} />}
            platform="App Store"
            link="#"
            text={t('Home.TradeOnTheGo.appStore')}
          />
          <StoreButton
            icon={<GooglePlayIcon />}
            platform="Google Play"
            link="#"
            text={t('Home.TradeOnTheGo.googlePlay')}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
