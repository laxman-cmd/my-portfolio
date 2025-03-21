import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const AnimatedTextNormal = ({ children, className = '' }) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
      <motion.h1
        className={`${className} inline-block w-full font-bold capitalize text-8xl`}
        variants={quote}
        initial='initial'
        animate='animate'
      >
        {/* Iterate over children elements to animate each individually */}
        {React.Children.map(children, (child, index) => (
          <motion.span
            key={`animated-child-${index}`}
            className='inline-block'
            variants={singleWord}
          >
            {child}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedTextNormal;
