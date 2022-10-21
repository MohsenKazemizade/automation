import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import DropDownNoeKarbar from '../components/DropDownNoeKarbar';

const VirayesheKarbar = () => {
  return (
    <div>
      <Header />

      <div className='grid grid-cols-3 gap-4'>
        <div className='grid grid-rows-3 p-4'>
          <form className='row-span-2 grid grid-cols-2 gap-4'>
            <div className='rounded-lg h-12 flex text-center justify-center'>
              <span className='flex text-xl items-center'>مشخصات کاربر :</span>
            </div>
            <div className='h-12 block w-full'></div>
            <input
              type='text'
              placeholder='نام کاربر'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <input
              type='text'
              placeholder='نام'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div className='rounded-lg h-16 flex text-center justify-center'>
              <span className='flex items-center'>نوع کابر :</span>
            </div>
            <input
              type='text'
              placeholder='نام خانوادگی'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div>
              <DropDownNoeKarbar />
            </div>
            <Link
              to='#'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>ثبت</span>
            </Link>
            <div className='rounded-lg h-16 flex text-center justify-center'>
              <span className='flex text-xl items-center'>رمز عبور :</span>
            </div>
            <div className='h-12 block w-full'></div>
            <input
              type='text'
              placeholder='رمز عبور جدید'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <input
              type='text'
              placeholder='رمز عبور فعلی'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <input
              type='text'
              placeholder='تکرار رمز عبور'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <Link
              to='#'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>ثبت</span>
            </Link>
          </form>
        </div>
        <div className='grid grid-rows-2 gap-4 p-8'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='h-12 block w-full'></div>
            <div className='h-12 block w-full'></div>
            <div className='h-12 block w-full'></div>
            <Link
              to='#'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>تعریف کاربر جدید</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VirayesheKarbar;
