import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import profilePic from '../../public/images/profile/myimagecropped.jpg';

// const projectsArray = [
//   {
//     title: 'Project 1',
//     description: 'This is a brief description of project 1.',
//     image: '/project1.png', // replace with your image paths
//     link: '/project1',
//   },
//   {
//     title: 'Project 2',
//     description: 'This is a brief description of project 2.',
//     image: '/project2.png',
//     link: '/project2',
//   },
//   // Add more projects as needed
// ];

const personel = () => {
  return (
    <>
      <section className='h-screen '>
        <div className='wrap'>
          {/* caption */}
          <div className='flex h-full'>
            <div
              className='flex flex-col items-center 
            md:justify-end justify-center
            md:w-full w-1/2  
            md:pb-16
            z-10
            '
            >
              <h3 className='text-4xl font-bold text-yellow-500 text-center'>
                I'm Laxman Mistry
              </h3>
              <p
                className='
              text-xl  dark:text-white lg:text-2xl mt-4
              '
              >
                A Frontend Developer
              </p>
              <button className='mt-8 px-6 py-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-dark transition-colors duration-300'>
                Contact Me
              </button>
            </div>
            {/* <div className='noneedbox w-[50%] '></div> */}
          </div>
          <div className='bgimg '></div>
        </div>
      </section>
      {/* <section>
        <div
          className='
        text-red-500 font-bold 
        md:text-center text-left
        md:text-2xl text-4xl
        
        '
        >
          Text Test
        </div>
        <br />
        <br />
        <br />
        <div>asdfa</div>
      </section> */}
    </>
  );
};

export default personel;

// return (
//   // filter grayscale contrast-125 brightness-75

//   <>
//     <section className='h-screen'>
//       <div
//         className='
//     h-full
//     w-full
//     bg-right-top bg-no-repeat bg-50
//     lg:bg-right
//     '
//         style={{
//           backgroundImage: `url(${profilePic.src})`,
//           backgroundSize: '50%',
//           '@media(min-width: 1024px)': {
//             backgroundSize: '100%', // 50% width on large screens
//           },
//           // backgroundSize: '100%',
//           // '@media(min-width: 1024px)': {
//           //   backgroundSize: '100%', // 50% width on large screens
//           // },
//         }}
//       >
//         {/* caption */}
//         <div className='flex h-full'>
//           <div className='flex flex-col items-center justify-center w-[50%] '>
//             <h3 className='text-4xl font-bold text-yellow-500 text-center'>
//               I'm Laxman Mistry
//             </h3>
//             <p className='text-xl lg:text-2xl mt-4'>A Frontend Developer</p>
//           </div>
//           <div className='w-[50%]'></div>
//         </div>
//       </div>
//     </section>
//   </>
// );

// return (
//   <>
//     <section
//       className='flex  h-screen
//     bg-light text-dark
//     dark:bg-dark dark:text-light
//     '
//     >
//       <div
//         className='
//       w-[50%]

//       '
//       >
//         <h1 className='text-6xl font-bold text-yellow-500'>
//           I'm Laxman Mistry
//         </h1>
//         <p className='text-2xl mt-4'>A Frontend Developer</p>
//         <button className='mt-8 px-6 py-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-dark transition-colors duration-300'>
//           Contact Me
//         </button>
//       </div>
//       <div
//         className='
//       w-[50%]
//       '
//       >
//         <Image
//           src={profilePic} // Replace with your image path
//           alt='Profile Image'
//           // layout='fill'
//           objectFit='contain' //cover / contain
//           className='filter grayscale contrast-125 brightness-75'
//         />
//       </div>
//     </section>
//   </>
// );

{
  /* <section className='relative flex items-center justify-center h-screen bg-light text-dark dark:bg-dark dark:text-light overflow-hidden'>
  Image Div
  <div className='absolute inset-0 w-full h-full z-10 lg:static lg:w-[50%] lg:h-auto'>
    <Image
      src={profilePic} // Replace with your image path
      alt='Profile Image'
      layout='fill'
      objectFit='cover'
      className='filter grayscale contrast-125 brightness-75'
    />
  </div>
  Text Div
  <div className='relative z-20 w-full p-8 lg:w-[50%] lg:static lg:p-0 text-center lg:text-left'>
    <h1 className='text-4xl lg:text-6xl font-bold text-yellow-500'>
      I'm Laxman Mistry
    </h1>
    <p className='text-xl lg:text-2xl mt-4'>A Frontend Developer</p>
    <button className='mt-8 px-6 py-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-dark transition-colors duration-300'>
      Contact Me
    </button>
  </div>
</section>; */
}

{
  /* <section className='relative flex items-center justify-center h-screen bg-dark text-light'>
The background image
<div className='absolute inset-0 z-0'>
  <Image
    src={profilePic} // Replace with your image path
    alt='Profile Image'
    layout='fill'
    objectFit='cover' //cover / contain
    className='filter grayscale contrast-125 brightness-75'
  />
</div>

Text overlay
<div className='relative z-10 p-8'>
  <h1 className='text-6xl font-bold text-yellow-500'>
    I'm Laxman Mistry
  </h1>
  <p className='text-2xl mt-4'>A Frontend Developer</p>
  <button className='mt-8 px-6 py-2 border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-dark transition-colors duration-300'>
    Contact Me
  </button>
</div>
</section> */
}

{
  /* Social media icons */
}
{
  /* <div className='absolute bottom-10 right-10 flex flex-col space-y-4'>
<a href='#' className='text-yellow-500 hover:text-light'>
  <i className='fab fa-facebook-f'></i>
</a>
<a href='#' className='text-yellow-500 hover:text-light'>
  <i className='fab fa-twitter'></i>
</a>
<a href='#' className='text-yellow-500 hover:text-light'>
  <i className='fab fa-linkedin-in'></i>
</a>
<a href='#' className='text-yellow-500 hover:text-light'>
  <i className='fab fa-whatsapp'></i>
</a>
</div> */
}

// <>
//   <Head>
//     <title>LM | Projects Page</title>
//     <meta name='description' content='any description' />
//   </Head>
//   <main className='flex w-full mb-16 flex-col items-center justify-center'>
//     <Layout className='pt-16'>
//       <AnimatedText
//         text='Imagination Trumps Knowledge!'
//         className='mb-16'
//       />
//     </Layout>
//   </main>
// </>

{
  /* <div className='container mx-auto p-10'>
  <h1 className='text-5xl font-bold text-center mb-12'>My Projects</h1>
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
          <h2 className='text-xl font-semibold mb-2'>{project.title}</h2>
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
</div> */
}
