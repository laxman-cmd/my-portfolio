import React, { useState } from 'react';
import Intro from './Intro';
import ProfileImage from './ProfileImage';
import { siReact, siMongodb, siNodedotjs, siExpress } from 'simple-icons/icons';
import profilePic from '../../public/images/profile/myimagesquare.jpg';
import AnimatedTextNormal from './AnimatedTextNormal';
import Link from 'next/link';
import { LinkArrow } from './icons';
import Image from 'next/image';
import { motion } from 'framer-motion';

const MyIntro = () => {
  return (
    <>
      {/* <div
        className='flex justify-center 
              md:m-0
              items-center
              lg:flex-col-reverse
              h-[30rem] lg:h-[60rem]
              lg:space-y-8 space-y-0 lg:space-x-0 space-x-8
            '
      >
        <div className='w-1/2'>
          <Intro />
        </div>
        <div className='w-1/2 md:w-full min-w-8'>
          <ProfileImage />
        </div>
      </div> */}
      <div className='flex justify-between items-center w-full  lg:flex-col flex-row-reverse'>
        <div className='flex w-1/2 justify-center'>
          <motion.div
            className='
        rounded-full overflow-hidden border-4 
        border-yellow-500
        min-w-[250px]
        min-h-[250px] 
        '
            // border-dashed
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Next.js Image Component with Circular Styling */}
            <Image
              src={profilePic} // Path to image in public folder
              alt='Profile Picture'
              width={250} // Adjust the width
              height={250} // Adjust the height
              className='rounded-full' // Circular shape
              loading='lazy'
            />
          </motion.div>
        </div>
        <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
          <div
            className='flex -rotate-6 justify-center
              lg:-mb-2
              '
          >
            <motion.div
              className='inline-block text-4xl lg:text-3xl'
              animate={{ rotate: [0, 20, 0] }}
              // biome-ignore lint/style/useNumberNamespace: <explanation>
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              👋
            </motion.div>
            {/* "Hi, I'm Laxman" Text */}
            <h1 className='text-2xl lg:text-[1.2rem] font-handwritten mt-2 text-yellow-500 italic '>
              {`Hi, I'm Laxman`}
            </h1>
          </div>
          <AnimatedTextNormal
            className='!text-6xl !text-center pb-1 dark:text-light 
                xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl
                '
          >
            <div
              className='
                text-2xl lg:text-xl dark:text-white  mt-8
                flex lg:flex-col align-middle justify-center
                '
            >
              <p className='bottom-0'>{`I'm a FullStack`}</p>
              <span className='flex justify-center space-x-1 mx-1 text-yellow-500 '>
                <HoverLogo
                  letter='M'
                  logo={applyColorToSvg(mongo.svg, '#47A248')}
                />

                <HoverLogo
                  letter='E'
                  logo={applyColorToSvg(siExpress.svg, '#68A068')}
                />
                <HoverLogo
                  letter='R'
                  logo={applyColorToSvg(siReact.svg, '#61DAFB')}
                />
                <HoverLogo
                  letter='N'
                  logo={applyColorToSvg(siNodedotjs.svg, '#68A063')}
                />
              </span>
              <p className='bottom-0'>{`Developer`}</p>
            </div>
          </AnimatedTextNormal>

          <p className='my-4 text-base font-medium dark:text-light md:text-sm sm:text-xs'>
            "Creating seamless user experiences and scalable solutions with 1+
            years of software development expertise."
          </p>
        </div>
      </div>
    </>
  );
};

const applyColorToSvg = (svg, color) =>
  svg.replace(/<path/g, `<path fill="${color}"`);
const mongo = siMongodb;
mongo.hex = 'c2c2c2';

const HoverLogo = ({ letter, logo }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.span
      className='relative group text-2xl font-semibold cursor-pointer'
      whileHover={{ scale: 1.2 }} // Increase size of letter on hover
    >
      {/* {letter} */}
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {letter}
      </span>
      {/* Pop-up Logo on Hover */}
      {hovered && (
        <motion.img
          className='absolute left-0 top-full mt-0 w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-opacity duration-300'
          style={{ transform: 'translateX(-50%)', scale: 0 }} // Center the logo and hide initially
          src={`data:image/svg+xml;base64,${btoa(logo)}`}
          alt={`${letter} logo`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.span>
  );
};

export default MyIntro;
