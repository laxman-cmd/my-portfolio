import FixedMenu from '@/components/FixedMenu';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import '@/styles/globals.css';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import { useEffect, useState } from 'react';
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
});
export default function App({ Component, pageProps }) {
  // const hello = [
  //   'hii',
  //   'hello',
  //   'Nǐ hǎo',
  //   'नमस्ते',
  //   'Hola',
  //   'Salut',
  //   'هذا',
  //   'হাই',
  //   'oi',
  //   'привет',
  //   'یہ',
  //   ' ',
  // ];

  // const [isLoading, setIsLoading] = useState(true);
  // const [currentGreeting, setCurrentGreeting] = useState(hello[0]);

  // useEffect(() => {
  //   let index = 0;

  //   const interval = setInterval(() => {
  //     setCurrentGreeting(hello[index]);
  //     index = (index + 1) % hello.length;
  //   }, 150);

  //   const timeout = setTimeout(() => {
  //     clearInterval(interval);
  //     setIsLoading(false);
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timeout);
  //     clearInterval(interval);
  //   };
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className='flex items-center justify-center min-h-screen bg-light dark:bg-dark'>
  //       <h1 className='text-4xl font-bold'>{currentGreeting}</h1>
  //     </div>
  //   );
  // }
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
        <div className='hidden fixed bottom-0 w-full lg:block'>
          <FixedMenu />
        </div>
      </main>
    </>
  );
}
