import Image from 'next/image';
import { motion } from 'framer-motion';
import profilePic from '../../public/images/profile/myimagesquare.jpg';

const ProfileImage = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
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
  );
};

export default ProfileImage;
