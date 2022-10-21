import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const MoafiathaeControlPanel = () => {
  return (
    <div>
      <Header />
      <div>
        <div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4'>
          <div className='grid grid-cols-3 grid-rows-3 gap-4'>
            <Link
              to='/controlpanel/moafiat/moafiaterade'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>معافیت رده</span>
            </Link>
            <Link
              to='/controlpanel/moafiat/moafiatedastur'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>معافیت دستور</span>
            </Link>
            <Link
              to='/controlpanel/moafiat/moafiatsanavat'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>معافیت سنوات</span>
            </Link>
            <Link
              to='/controlpanel/moafiat/moafiatpezeshki'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>معافیت پزشکی</span>
            </Link>
            <Link
              to='/controlpanel/moafiat/anvaemoafiatpezeshki'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>نوع معافیت پزشکی</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MoafiathaeControlPanel;
