import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const ControlPanel = () => {
  return (
    <div>
      <Header />
      <div>
        <div className='mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4'>
          <div className='grid grid-cols-3 grid-rows-3 gap-4'>
            <Link
              to='/gordanehtiat'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>لیست گردان احتیاط</span>
            </Link>
            <Link
              to='#'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>ویرایش مسئولین شیفتها</span>
            </Link>

            <Link
              to='/ozviathaefaghedesharayet'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>عضویتهای فاقد شرایط</span>
            </Link>
            <Link
              to='#'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>آمار</span>
            </Link>
            <Link
              to='/controlpanel/moafiat'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>معافیت ها</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ControlPanel;
