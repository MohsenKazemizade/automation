import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import DropDownMamooriat from '../components/DropDownMamooriat';

const HozurGhiab = () => {
  return (
    <div>
      <Header />

      <div className='grid grid-cols-3 gap-4'>
        <div className=' p-8'>
          <form className='grid grid-cols-2 gap-4'>
            <input
              type='text'
              placeholder='کد پرسنلی'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div className='h-12 block w-full'></div>
            <input
              type='text'
              placeholder='نام'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div className='h-12 block w-full'></div>
            <input
              type='text'
              placeholder='نام خانوادگی'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div className='h-12 block w-full'></div>
            <input
              type='text'
              placeholder='محل خدمت'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div className='h-12 block w-full'></div>
            <input
              type='text'
              placeholder='تاریخ'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div className='h-12 block w-full'></div>
            <div className='rounded-lg h-12 flex text-center justify-center'>
              <span className='flex items-center'>ماموریت اصلی :</span>
            </div>

            <div>
              <DropDownMamooriat />
            </div>
            <div className='rounded-lg h-16 flex text-center justify-center'>
              <span className='flex items-center'>ماموریت فرعی :</span>
            </div>

            <div>
              <DropDownMamooriat />
            </div>
            <input
              type='text'
              placeholder='وضعیت'
              className='h-12 block w-full mb-4 px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div className='h-12 block w-full'></div>
            <Link
              to='#'
              className='col-span-2 rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>ثبت</span>
            </Link>
          </form>
        </div>
        <div className='grid grid-rows-2 gap-4 py-8'>
          <div className='grid grid-cols-3 gap-4'>
            <div className='h-12 block w-full'></div>
            <Link
              to='#'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>انتخاب فایل</span>
            </Link>
            <div className='h-12 block w-full'></div>

            <div className='rounded-lg h-16 flex text-center justify-center'>
              <span className='flex items-center'>ماموریت اصلی :</span>
            </div>

            <div className='col-span-2'>
              <DropDownMamooriat />
            </div>
            <div className='rounded-lg h-16 flex text-center justify-center'>
              <span className='flex items-center'>ماموریت فرعی :</span>
            </div>

            <div className='col-span-2'>
              <DropDownMamooriat />
            </div>
            <div className='h-12 block w-full'></div>

            <Link
              to='#'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>ثبت</span>
            </Link>
          </div>
        </div>
        <div className='grid grid-rows-3 grid-cols-3 gap-4 py-8'>
          <Link
            to='#'
            className='col-start-2 row-start-2 rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
          >
            <span className='flex items-center'>پنل حذف افراد</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HozurGhiab;
