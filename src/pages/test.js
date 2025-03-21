import React from 'react';
import { motion } from 'framer-motion';

const ProjectSection = ({ projects }) => {
  return (
    <>
      <div></div>
      <div></div>
    </>
    // <div className='space-y-12'>
    //   {projects.map((project, index) => (
    //     <motion.div
    //       key={project.id}
    //       initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    //       animate={{ opacity: 1, x: 0 }}
    //       transition={{ duration: 0.8 }}
    //       className={`flex flex-col md:flex-row items-center ${
    //         index % 2 === 0 ? 'md:flex-row-reverse' : ''
    //       } bg-gray-100 rounded-lg shadow-md overflow-hidden`}
    //     >
    //       {/* Image Section */}
    //       <div className='w-full md:w-1/2 h-64 bg-yellow-500 flex items-center justify-center'>
    //         <img
    //           src={project.image}
    //           alt={project.title}
    //           className='object-cover w-full h-full'
    //         />
    //       </div>

    //       {/* Text Section */}
    //       <div className='w-full md:w-1/2 p-6 space-y-4 text-center md:text-left'>
    //         <h2 className='text-2xl font-bold text-gray-800'>
    //           {project.title}
    //         </h2>
    //         <p className='text-gray-600'>{project.description}</p>
    //         <a
    //           href={project.link}
    //           className='text-blue-500 hover:text-blue-700 transition-colors'
    //         >
    //           View Project
    //         </a>
    //       </div>
    //     </motion.div>
    //   ))}
    // </div>
  );
};

// Example usage
const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Description for project one.',
    image: '/path/to/image1.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Description for project two.',
    image: '/path/to/image2.jpg',
    link: '#',
  },
  // Add more projects as needed
];

export default function Test() {
  return (
    <div className='container mx-auto p-8'>
      <ProjectSection projects={projects} />
    </div>
  );
}
