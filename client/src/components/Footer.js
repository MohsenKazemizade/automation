import React from 'react';
import BackButton from './BackButton';

const Footer = () => {
  return (
    <footer className='absolute bg-white inset-x-0 bottom-0'>
      <div className='py-2 px-4 bg-gray-100 md:flex md:items-center md:justify-between'>
        <span className='text-lg text-gray-500'>کاربر : .....</span>
        <div className='flex space-x-6 '>
          <BackButton />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
