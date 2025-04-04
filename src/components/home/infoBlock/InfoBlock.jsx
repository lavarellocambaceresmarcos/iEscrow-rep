import PropTypes from 'prop-types';
import styles from './InfoBlock.module.css';
import InfoCard from '../../ui/cards/infoCard/InfoCard';
import adaptabilityIcon from '../../../assets/images/iconsSection/dark/adaptabilityIcon.png';
import privacyIcon from '../../../assets/images/iconsSection/dark/privacyIcon.png';
import { motion } from 'framer-motion';
import { scaleVariant } from '../../../lib/animations/scaleVariants';

import SecurityIcon from '../../ui/icons/icons-section/SecurityIcon';
import MissionIcon from '../../ui/icons/icons-section/MissionIcon';
import ReputationIcon from '../../ui/icons/icons-section/ReputationIcon';

InfoBlock.propTypes = {
  t: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

/**
 * Home info section
 *
 * Renders a grid of info cards
 *
 * @returns {JSX.Element}
 */
export default function InfoBlock({ t, theme }) {
  return (
    <section className={`${styles.infoBlock} ${styles[theme]}`}>
      <div className={styles.wrapper}>
        {/* Top block */}
        <div className={styles.topBlock}>
          <motion.div
            variants={scaleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <InfoCard
              title={t('Home.InfoBlock.Security.title')}
              text={t('Home.InfoBlock.Security.description')}
            >
              <SecurityIcon theme={theme} />
            </InfoCard>
          </motion.div>
          <div className={styles.divider}></div>
          <motion.div
            variants={scaleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <InfoCard
              title={t('Home.InfoBlock.Mission.title')}
              text={t('Home.InfoBlock.Mission.description')}
            >
              <MissionIcon theme={theme} />
            </InfoCard>
          </motion.div>
          <div className={styles.divider}></div>
          <motion.div
            variants={scaleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            <InfoCard
              title={t('Home.InfoBlock.Reputation.title')}
              title2={t('Home.InfoBlock.Reputation.title2')}
              text={t('Home.InfoBlock.Reputation.description')}
            >
              <ReputationIcon theme={theme} />
            </InfoCard>
          </motion.div>
        </div>

        {/* Bottom block */}
        <div className={styles.bottomBlock}>
          <InfoCard
            title={t('Home.InfoBlock.Adaptability.title')}
            text={t('Home.InfoBlock.Adaptability.description')}
            lg
          >
            <img
              src={adaptabilityIcon}
              alt="adaptability icon"
              loading="lazy"
              draggable={false}
            />
          </InfoCard>
          <InfoCard
            title={t('Home.InfoBlock.Privacy.title')}
            text={t('Home.InfoBlock.Privacy.description')}
            lg
          >
            <img
              src={privacyIcon}
              alt="privacy icon"
              loading="lazy"
              draggable={false}
            />
          </InfoCard>
        </div>
      </div>
    </section>
  );
}
