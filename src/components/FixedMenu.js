import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from './icons';
import { useRouter } from 'next/router';
import Link from 'next/link';
const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`h-[1px] inline-block absolute left-0 -bottom-0.5
          group-hover:w-full translate-[width] ease duration-300
           bg-dark 
          dark:bg-light
          ${router.asPath === href ? 'w-full' : 'w-0'}
          `}
      >
        &nbsp;
      </span>
    </Link>
  );
};
const FixedMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='flex justify-around bg-gray-200 p-4 dark:bg-gray-900 dark:text-cyan-50 w-full'>
      {/* <div>About</div> */}
      <CustomLink href='/about' title='About' />
      <div>Articles</div>
      {/* <CustomLink href='/articles' title='Articles' /> */}

      {/* <div>Home</div> */}
      <CustomLink href='/' title='Home' />

      {/* <div>Projects</div> */}
      <CustomLink href='/projects' title='Projects' />

      <div className='flex'>
        <button
          className=' flex-col justify-center items-center hidden lg:flex'
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
              isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm translate-y-0.5 ${
              isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}
          ></span>
        </button>

        {/* Animated menu items */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='absolute -top-48 flex flex-col items-center '
          >
            <motion.a
              href='https://github.com'
              target='_blank'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 my-2'
            >
              <GithubIcon className='w-6' />
            </motion.a>
            <motion.a
              href='https://twitter.com'
              target='_blank'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 my-2'
            >
              <TwitterIcon className='w-6' />
            </motion.a>
            <motion.a
              href='https://linkedin.com'
              target='_blank'
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 my-2'
            >
              <LinkedInIcon className='w-6' />
            </motion.a>
            <motion.a
              href={'https://pinterest.com'}
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 bg-light rounded-full my-2'
            >
              <PinterestIcon className='w-6' />
            </motion.a>
            <motion.a
              href={'https://dribble.com'}
              target={'_blank'}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 my-2'
            >
              <DribbbleIcon className='w-6' />
            </motion.a>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default FixedMenu;
