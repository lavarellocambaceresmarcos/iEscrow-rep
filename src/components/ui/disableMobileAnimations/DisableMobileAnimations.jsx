import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

DisableMobileAnimations.propTypes = {
  children: PropTypes.node.isRequired,
  ...motion.div.propTypes,
};

const DisableMobileAnimations = ({ children, ...props }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsMobile(mediaQuery.matches);

    const handleResize = () => setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return isMobile ? (
    <>{children}</>
  ) : (
    <motion.div {...props}>{children}</motion.div>
  );
};

export default DisableMobileAnimations;
