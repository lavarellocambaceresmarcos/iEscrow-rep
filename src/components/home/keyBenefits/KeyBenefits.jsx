import PropTypes from 'prop-types';
import styles from './KeyBenefits.module.css';
import phoneMobile from '../../../assets/images/keyBenefits/keybenefits_mobile.png';
import phoneDesktop from '../../../assets/images/keyBenefits/keybenefits_desktop.png';
import IconText from '../../ui/iconText/IconText';
import GradientTitle from '../../ui/gradientTitle/GradientTitle';
import { Trans } from 'react-i18next';
import { motion } from 'framer-motion';
import { keyBenefitSlideVariants } from '../../../lib/animations/slideVariants';
import {
  mediumFadeInRightToLeft,
  fadeInLeftToRight,
} from '../../../lib/animations/fadeInVariants';
import { keyBenefitsVariants } from '../../../lib/animations/itemVariants';

KeyBenefits.propTypes = {
  t: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

/**
 * Key benefits section that contains the title and the card}
 *
 * @returns {JSX.Element}
 */
export default function KeyBenefits({ t, theme }) {
  return (
    <section className={`${styles.keyBenefits} ${styles[theme]}`}>
      <motion.h2
        variants={mediumFadeInRightToLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
      >
        <Trans i18nKey="Home.KeyBenefits.title">
          <GradientTitle></GradientTitle>
        </Trans>
      </motion.h2>
      <div className={styles.card}>
        <div className={styles.falseBg}></div>
        {/* Content card */}
        <div className={styles.content}>
          <motion.picture
            variants={fadeInLeftToRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <source
              className={styles.phone}
              media="(max-width: 1024px)"
              srcSet={phoneMobile}
            />
            <img
              className={styles.phone}
              src={phoneDesktop}
              alt="key benefits phone image"
            />
          </motion.picture>
          {/* Text container */}
          <motion.div
            className={styles.textContainer}
            variants={keyBenefitSlideVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Text Articles */}
            <div className={styles.articles}>
              <article>
                <motion.h3 variants={keyBenefitsVariants}>
                  {t('Home.KeyBenefits.Defi.title')}
                </motion.h3>
                <ul>
                  <motion.li variants={keyBenefitsVariants}>
                    <IconText>{t('Home.KeyBenefits.Defi.list.0')}</IconText>
                  </motion.li>
                  <motion.li variants={keyBenefitsVariants}>
                    <IconText>{t('Home.KeyBenefits.Defi.list.1')}</IconText>
                  </motion.li>
                  <motion.li variants={keyBenefitsVariants}>
                    <IconText>{t('Home.KeyBenefits.Defi.list.2')}</IconText>
                  </motion.li>
                  <motion.li variants={keyBenefitsVariants}>
                    <IconText>{t('Home.KeyBenefits.Defi.list.3')}</IconText>
                  </motion.li>
                  <motion.li variants={keyBenefitsVariants}>
                    <IconText>{t('Home.KeyBenefits.Defi.list.4')}</IconText>
                  </motion.li>
                </ul>
              </article>
              <article>
                <motion.h3 variants={keyBenefitsVariants}>
                  {t('Home.KeyBenefits.Gefi.title')}
                </motion.h3>
                <ul>
                  <motion.li variants={keyBenefitsVariants}>
                    <IconText>{t('Home.KeyBenefits.Gefi.list.0')}</IconText>
                  </motion.li>
                  <motion.li variants={keyBenefitsVariants}>
                    <IconText>{t('Home.KeyBenefits.Gefi.list.1')}</IconText>
                  </motion.li>
                </ul>
              </article>
            </div>

            {/* Text */}
            <div className={styles.text}>
              <motion.p variants={keyBenefitsVariants}>
                {t('Home.KeyBenefits.cta1')}
              </motion.p>
              <motion.p variants={keyBenefitsVariants}>
                {t('Home.KeyBenefits.cta2')}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
