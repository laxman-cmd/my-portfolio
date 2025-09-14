// import AnimatedText from '@/components/AnimatedText';
// import Layout from '@/components/Layout';
// import Head from 'next/head';
// import React from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import pj1 from '../../public/images/projects/agency-website-cover-image.jpg';
// import pj2 from '../../public/images/projects/fashion-studio-website.jpg';

// const projects = () => {
//   const projectsArray = [
//     {
//       title: 'Project 1',
//       description: 'This is a brief description of project 1.',
//       //   image: { pj1 }, // replace with your image paths
//       image: pj1,
//       link: '/project1',
//     },
//     {
//       title: 'Project 2',
//       description: 'This is a brief description of project 2.',
//       image: pj2,
//       link: '/project2',
//     },
//     // Add more projects as needed
//   ];
//   return (
//     <>
//       <Head>
//         <title>LM | Projects Page</title>
//         <meta name='description' content='any description' />
//       </Head>
//       <main className='flex w-full mb-16 flex-col items-center justify-center'>
//         <Layout className='pt-16'>
//           <AnimatedText
//             text='Imagination Trumps Knowledge!'
//             className='mb-16'
//           />

//           <div className='container mx-auto p-10'>
//             <h1 className='text-5xl font-bold text-center mb-12'>
//               My Projects
//             </h1>
//             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
//               {projectsArray.map((project, index) => (
//                 <motion.div
//                   key={index}
//                   className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex'
//                   whileHover={{ scale: 1.05 }}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Image
//                     src={project.image}
//                     alt={project.title}
//                     width={600}
//                     height={400}
//                     className='w-50 h-64 object-cover'
//                   />
//                   <div className='p-6'>
//                     <h2 className='text-xl font-semibold mb-2'>
//                       {project.title}
//                     </h2>
//                     <p className='text-gray-600 dark:text-gray-400'>
//                       {project.description}
//                     </p>
//                     <a
//                       href={project.link}
//                       className='mt-4 inline-block text-blue-500 dark:text-blue-400 hover:underline'
//                     >
//                       View Project
//                     </a>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </Layout>
//       </main>
//     </>
//   );
// };

// export default projects;

import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
// import pj1 from '../../public/images/projects/agency-website-cover-image.jpg';
import trexoedge from '../../public/trexoedge.png';
import wezboone from '../../public/wezboone.png';
import trexomoney from '../../public/trexomoney.png';

import pj1 from '../../public/dpinfra_snap.png';
// import pj2 from '../../public/images/projects/fashion-studio-website.jpg';
import pj2 from '../../public/goplayturf.png';
import pj3 from '../../public/womensos.jpg';

import { siReact, siMongodb, siExpress } from 'simple-icons/icons';

const Projects = () => {
  const projectsArray = [
    {
      title: 'TrexoEdge WebApp',
      description:`trexo edge description here #willupdatesoon #onGoingProject `,
      image: trexoedge,
      link: '/trexoedge.com',
    },
      {
      title: 'Wezboone WebApp',
      description:`Wezboone description here #willupdatesoon #onGoingProject`,
      image: wezboone,
      link: '/one.wezboone.com',
    },
      {
      title: 'Trexo Money Website',
      description:`trexo money description here #willupdatesoon #onGoingProject`,
      image: trexomoney,
      link: '/trexo.money',
    },
    {
      title: 'Tanker ERP',
      description:
        'DP Sqaure infra is a full-stack enterprise resource planning (ERP) system designed for water tanker businesses to streamline operations, track sales, and manage invoices efficiently. Built using Next.js, Nest.js, Prisma ORM, and PostgreSQL, this application provides a seamless experience for managing daily, monthly, and yearly sales data while ensuring accurate financial reporting.',
      image: pj1,
      link: '/project1',
    },
    {
      title: 'Jizza Turf Sports',
      description:
        'Jizza Turf Sports is a scalable web application designed for real-time turf booking and management. The platform allows users to search, view, and reserve sports turfs based on location and availability. It also provides turf owners with tools to manage bookings, schedules, and turf listings.',
      image: pj2,
      link: '/project2',
    },
    {
      title: 'Women Safety SOS',
      description:
        'A full-stack mobile application built using React Native with Expo, aimed at ensuring womens safety by enabling quick access to emergency services. The app allows users to send instant SOS signals with real-time location data to trusted contacts, providing features like battery monitoring, live location sharing via Google Maps, and secure data handling.',
      image: pj3,
      link: '/project3',
    },
    // Add more projects as needed
  ];
  // const applyColorToSvg = (svg, color) => {
  //   return svg.replace(/currentColor/, color);
  // };

  return (
    <>
      <Head>
        <title>LM | Projects Page</title>
        <meta name='description' content='any description' />
      </Head>
      <main className='flex w-full mb-16 flex-col items-center justify-center'>
        <Layout className='pt-16'>
          <AnimatedText
            text='Imagination Trumps Knowledge!'
            className='mb-8  dark:text-light 
            2xl:!text-4xl
                xl:!text-3xl lg:!text-center lg:!text-4xl md:!text-3xl sm:!text-3xl'
          />

          <div className='container mx-auto p-10'>
            <h1 className='text-3xl dark:text-light font-bold text-center mb-12'>
              My Projects
            </h1>
            <div className='space-y-16'>
              {projectsArray.map((project, index) => (
                <ProjectCard
                  key={index}
                  index={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              ))}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

const ProjectCard = ({ index, title, description, image, link }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const imageVariants = {
    hidden:
      index % 2 === 0
        ? { x: '-100vw', opacity: 0 }
        : { x: '100vw', opacity: 0 },
    // hidden: { x: '-100vw', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2 } },
  };

  const descriptionVariants = {
    // hidden: { x: '100vw', opacity: 0 },
    hidden:
      index % 2 === 0
        ? { x: '100vw', opacity: 0 }
        : { x: '-100vw', opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.2 } },
  };

  return (
    <>
      {/* <Head>
        <title>LM | Projects</title>
        <meta name='description' content='Generated by create next app' />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='p-0'> */}
      <div
        ref={ref}
        className={`grid md:grid-cols-1 grid-cols-2 ${
          index % 2 === 1 ? 'lg:grid-cols-2-reverse' : ''
        }`}
      >
        <motion.div
          // className='w-full h-64'
          initial='hidden'
          animate={controls}
          variants={imageVariants}
          className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex'
        >
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className='w-full h-64 object-cover'
            loading='lazy'
          />
        </motion.div>

        <motion.div
          className='p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex-col'
          initial='hidden'
          animate={controls}
          variants={descriptionVariants}
        >
          <div>
            <h2 className='text-xl dark:text-light font-semibold mb-2'>
              {title}
            </h2>
          </div>
          <div>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              {description}
            </p>
          </div>

          <div className='flex mt-3 space-x-2 dark:invert'>
            <Image
              height='32'
              width='32'
              src={`data:image/svg+xml;base64,${btoa(siReact.svg, '#61DAFB')}`}
              alt='React Logo'
              loading='lazy'
            />
            <Image
              src={`data:image/svg+xml;base64,${btoa(
                siMongodb.svg,
                '#47A248'
              )}`}
              alt='MongoDB Logo'
              height='32'
              width='32'
              loading='lazy'
            />
            <Image
              height='32'
              width='32'
              src={`data:image/svg+xml;base64,${btoa(siExpress.svg)}`}
              alt='Express Logo'
              loading='lazy'
            />
          </div>
        </motion.div>
      </div>
      {/* </Layout>
      </main> */}
    </>
  );
};

export default Projects;

// in project card
{
  /* <div>  
          <a
            href={link}
            className='mt-4 inline-block text-blue-500 dark:text-blue-400 hover:underline'
          >
            View Project
          </a>
        </div> */
}
{
  /* <Image
              height="32" width="32" 
              src={`data:image/svg+xml;base64,${btoa(siNodeDotJs.svg)}`}
              alt='Node.js Logo'
              loading='lazy'
        /> */
}

{
  /* <div>
             
                <svg
                  width='100'
                  height='100'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#68A063' // siNodeDotJs's official hex color
                >
                  <path d={siNodeDotJs.path} />
                </svg>
              </div> 
    */
  // biome-ignore lint/complexity/noUselessLoneBlockStatements: <explanation>
}

{
  /*   <img
              src={`data:image/svg+xml;base64,${btoa(applyColorToSvg(siMongodb.svg, '#47A248'))}`} // MongoDB green color
                alt="MongoDB Logo"
                height='32'
                width='32'
              />*/
  // biome-ignore lint/complexity/noUselessLoneBlockStatements: <explanation>
}
