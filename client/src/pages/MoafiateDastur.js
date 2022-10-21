import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import TableMoafiatPezeshki from '../components/TableMoafiatPezeshki';
import DropDownDastur from '../components/DropDownDastur';
import DropDownMamooriat from '../components/DropDownMamooriat';

const MoafiateDastur = () => {
  return (
    <div>
      <Header />

      <div className='grid grid-cols-3 gap-4'>
        <div className=' p-8'>
          <form className='grid grid-cols-3 gap-4'>
            <input
              type='text'
              placeholder='کد پاسداری'
              className='h-12 block w-full mb-4 px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />

            <div></div>
            <DropDownDastur />

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

            <input
              type='text'
              placeholder='تاریخ ثبت'
              className='col-span-2 col-start-2 h-12 block w-full mb-4 px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
          </form>
          <Link
            to='#'
            className='rounded-lg h-16 flex mb-4 text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
          >
            <span className='flex items-center'>ثبت</span>
          </Link>
        </div>
        <div className='col-span-2 grid grid-rows-3 gap-2'>
          <div className='row-span-2 overflow-scroll h-96 mt-20 ml-20'>
            <TableMoafiatPezeshki />
          </div>
          <div className='row-span-1 grid grid-cols-2 h-auto gap-4 ml-20'>
            <div className='col-span-2'>نوع فعالیت</div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MoafiateDastur;
