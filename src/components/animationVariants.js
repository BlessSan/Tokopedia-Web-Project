const transition = {
  duration: 0.2,
  type: "tween",
  ease: "easeOut",
};

export const pageTransitionVariant = {
  initial: {
    y: 1000,
    transition: transition,
  },
  animate: {
    y: 0,
    transition: transition,
  },
  exit: {
    y: 1000,
    transition: transition,
  },
};

export const menuButtonVariant = {
  initial: {
    y: 0,
    transition: transition,
  },
  selected: {
    y: -15,
    transition: transition,
  },
};
