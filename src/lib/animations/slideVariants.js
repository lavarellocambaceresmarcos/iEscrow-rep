const isMobile = window.innerWidth <= 768;

export const slideVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
      duration: 0.1,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
export const keyBenefitSlideVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0,
      duration: 0.07,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const roadmapSlideVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: isMobile ? 0.1 : 0.2,
      delayChildren: isMobile ? 0.05 : 0.1,
    },
  },
};
