export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleOnHover = {
  whileHover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

export const parallaxScroll = (yOffset: number) => ({
  initial: {
    y: 0,
  },
  animate: {
    y: yOffset,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
});
