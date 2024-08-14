import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      className='w-full border-t-2 border-solid border-dark 
    dark:border-light dark:text-light sm:text-base
    '
    >
      <Layout className='py-8 flex items-center justify-between  lg:flex-col lg:py-6'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center lg:py-2'>
          Build with{' '}
          <span className='text-primary dark:text-primaryDark text-2x1 px-1'>
            &#9825;
          </span>
          by&nbsp;
          <Link
            href='https://devlax.com'
            className='underline underline-offset-2'
            target={'_blank'}
          >
            DevLax
          </Link>
        </div>
        <Link
          href='https://devlax.com'
          target={'_blank'}
          className='underline underline-offset-2'
        >
          Say hello
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
