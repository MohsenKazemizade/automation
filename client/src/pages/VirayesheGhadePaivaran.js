import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import TableMoafiatPezeshki from '../components/TableMoafiatPezeshki';

const VirayesheGhadePaivaran = () => {
  return (
    <div>
      <Header />

      <div className='grid grid-cols-3 gap-4'>
        <div className=' p-8'>
          <form className='grid grid-cols-2 gap-4'>
            <input
              type='text'
              placeholder='کد پاسداری'
              className='h-12 block w-full mb-4 px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div className='h-12 block w-full'></div>
            <input
              type='text'
              placeholder='قد'
              className='h-12 block w-full mb-4 px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div className='h-12 block w-full'></div>
          </form>
          <div className='grid grid-cols-2 gap-4'>
            <Link
              to='#'
              className='col-span-2 rounded-lg h-16 mb-4 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>افزودن</span>
            </Link>
            <Link
              to='#'
              className='rounded-lg h-16 flex mb-4 text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>قبلی</span>
            </Link>
            <Link
              to='#'
              className='rounded-lg h-16 flex mb-4 text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>بعدی</span>
            </Link>
            <Link
              to='#'
              className='rounded-lg h-16 flex mb-4 text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>ثبت</span>
            </Link>
            <Link
              to='#'
              className='rounded-lg h-16 flex mb-4 text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>حذف</span>
            </Link>
          </div>
        </div>
        <div className='col-span-2 grid grid-rows-3 gap-2'>
          <div className='row-span-2 overflow-scroll h-96 mt-20 ml-20'>
            <TableMoafiatPezeshki />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VirayesheGhadePaivaran;
