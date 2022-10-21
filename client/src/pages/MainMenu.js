import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import refresh from '../img/refresh-page-option.png';

const MainMenu = () => {
  return (
    <div>
      <Header />
      <div>
        <div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4'>
          <div className='grid grid-cols-2 grid-rows-3 gap-4'>
            <Link
              to='/controlpanel'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>پنل مدیریت</span>
            </Link>
            <Link
              to='/mission'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>ماموریت</span>
            </Link>
            <Link
              to='/gozareshat'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>گزارشات</span>
            </Link>
            <Link
              to='#'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>حوزه نمایندگی</span>
            </Link>
            <Link
              to='/virayeshekarbar'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>ویرایش کاربر</span>
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-12 gap-4'>
          <button
            className='rounded-lg mx-auto bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm whitespace-nowrap'
            href='#'
          >
            <img src={refresh} className='h-6 w-6 m-4' alt='' />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainMenu;
