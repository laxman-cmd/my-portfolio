import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import pj1 from '../../public/images/projects/agency-website-cover-image.jpg';
import pj2 from '../../public/images/projects/fashion-studio-website.jpg';

const projects = () => {
  const projectsArray = [
    {
      title: 'Project 1',
      description: 'This is a brief description of project 1.',
      //   image: { pj1 }, // replace with your image paths
      image: pj1,
      link: '/project1',
    },
    {
      title: 'Project 2',
      description: 'This is a brief description of project 2.',
      image: pj2,
      link: '/project2',
    },
    // Add more projects as needed
  ];
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
            className='mb-16'
          />

          <div className='container mx-auto p-10'>
            <h1 className='text-5xl font-bold text-center mb-12'>
              My Projects
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {projectsArray.map((project, index) => (
                <motion.div
                  key={index}
                  className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden'
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className='w-full h-64 object-cover'
                  />
                  <div className='p-6'>
                    <h2 className='text-xl font-semibold mb-2'>
                      {project.title}
                    </h2>
                    <p className='text-gray-600 dark:text-gray-400'>
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      className='mt-4 inline-block text-blue-500 dark:text-blue-400 hover:underline'
                    >
                      View Project
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
