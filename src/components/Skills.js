import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Skill = ({ name, x, y, percentage }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className='flex items-center justify-center rounded-full font-semibold ☐ bg-dark text-light
    py-3 px-6 shadow-dark cursor-pointer absolute  dark:text-dark dark:bg-light
    lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
    xs:text-dark xs:dark:text-light xs:font-bold
    '
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      // transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {name}
      {/* Percentage bar on hover */}
      {/* <motion.div
        className='absolute bottom-0 left-0 h-1 bg-light dark:bg-dark'
        initial={{ width: 0 }}
        whileHover={{ width: `${percentage}`, transition: { duration: 1 } }}
        style={{ bottom: '-10px' }} // Adjust the position of the bar
      ></motion.div> */}
      {/* Container for the percentage bar */}
      <div className='absolute bottom-[-10px] w-full left-0'>
        {/* Background bar */}
        <div className='h-1 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden'>
          {/* Foreground bar */}
          <motion.div
            className='h-full bg-blue-500 dark:bg-blue-300'
            initial={{ width: 0 }}
            // whileHover={{ width: `${percentage}` }}
            animate={{ width: hovered ? `${percentage}%` : '0%' }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
      {/* Percentage text on hover */}
      {hovered && (
        <div className='absolute top-[-30px] bg-dark text-light dark:bg-light dark:text-dark text-xs px-2 py-1 rounded'>
          {percentage}%
        </div>
      )}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className='font-semibold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>
        Skills
      </h2>
      <div
        className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
    md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]'
      >
        <motion.div
          className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer  dark:text-dark dark:bg-light
          lg:p-6 md:p-4 xs:text-xs xs:p-2
          '
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {/* <Skill name='CSS' x={'-5vw'} y={'-10vw'} /> */}
        <Skill name='HTML' x='-25vw' y='2vw' percentage={85} />
        <Skill name='CSS' x='-5vw' y='-10vw' percentage={80} />
        <Skill name='Javascript' x='20vw' y='6vw' percentage={60} />
        <Skill name='ReactJS' x='0vw' y='12vw' percentage={75} />
        <Skill name='NextJS' x='-20vw' y='-15vw' percentage={55} />
        <Skill name='NodeJS' x='15vw' y='-12vw' percentage={50} />
        <Skill name='NestJs' x='32vw' y='-5vw' percentage={50} />
        <Skill name='MySql' x='0vw' y='-20vw' percentage={60} />
        <Skill name='Mantine' x='-25vw' y='18vw' percentage={70} />
        <Skill name='Tailwind CSS' x='18vw' y='18vw' percentage={60} />
      </div>
    </>
  );
};

export default Skills;
