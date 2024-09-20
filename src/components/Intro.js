import { motion } from 'framer-motion';
import { siReact, siMongodb, siNodedotjs, siExpress } from 'simple-icons/icons';
import React, { useState } from 'react';
import Link from 'next/link';

const applyColorToSvg = (svg, color) =>
  svg.replace(/<path/g, `<path fill="${color}"`);
const mongo = siMongodb;
mongo.hex = 'c2c2c2';
const Intro = () => {
  console.log('react', applyColorToSvg(siReact.svg, '61DAFB'));
  return (
    <>
      <section className='h-[70vh]'>
        {/* Caption */}
        <div className='flex h-full align-middle'>
          <div
            className='flex items-center 
              lg:justify-start justify-center
              md:pb-0
              '
          >
            <div className='text-center lg:-mt-[45rem]'>
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
                <h1 className='text-2xl lg:text-[1.2rem] font-handwritten mt-2 text-yellow-500 italic'>
                  {`Hi, I'm Laxman`}
                </h1>
              </div>
              {/* <h3 className='text-4xl font-bold text-yellow-500 text-center'>
                  I'm Laxman Mistry
                </h3> */}
              <div
                className='
                text-2xl lg:text-xl dark:text-white  mt-8
                flex lg:flex-col align-middle justify-center
                '
              >
                {/* Letters with Hover Effects */}
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
              <div
                className='
              text-base font-medium dark:text-light md:text-sm sm:text-sm'
              >
                {`"Creating seamless user experiences and scalable solutions with
                1+ years of software development expertise."`}
              </div>

              {/* Contact Me Button */}
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button className='mt-8 px-6 py-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-dark transition-colors duration-300 rounded-lg'>
                <Link
                  target={'_blank'}
                  href='/mailto:mistrylaxmand@gmail.com'
                  // className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base'
                >
                  Contact Me
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Component to Handle Hover and Display Logo
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

export default Intro;
