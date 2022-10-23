import React from 'react';
import DropDownMainMission from '../components/DropDownMainMission';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import TableMoafiatSanavat from '../components/TableMoafiatSanavat';

const MoafiatSanavat = () => {
  return (
    <div>
      <Header />

      <div className='grid grid-cols-3 gap-4'>
        <div className=' p-8'>
          <form className='grid grid-cols-2 gap-4'>
            <input
              type='text'
              placeholder='سنوات'
              className='h-12 block w-full mb-4 px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />

            <div></div>
            <div className='rounded-lg h-16 flex text-center justify-center'>
              <span className='flex items-center'>ماموریت اصلی :</span>
            </div>

            <DropDownMainMission />
            <div className='rounded-lg h-16 flex text-center justify-center'>
              <span className='flex items-center'>ماموریت فرعی :</span>
            </div>

            <DropDownMainMission />
            <div class='col-span-2 flex items-center mb-4'>
              <input
                id='default-checkbox'
                type='checkbox'
                value=''
                className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
              />
              <label
                for='default-checkbox'
                className='m-4 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                مشاهده آخرین
              </label>
            </div>
            <div className='rounded-lg h-16 flex text-center justify-center'>
              <span className='flex items-center'>وضعیت :</span>
            </div>

            <DropDownMainMission />
            <Link
              to='#'
              className='rounded-lg h-16 flex mb-4 text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>ثبت</span>
            </Link>
          </form>
        </div>
        <div className='col-span-2 grid grid-rows-3 gap-2'>
          <div className='row-span-2 overflow-y-scroll h-96 mt-20 ml-20'>
            <TableMoafiatSanavat />
          </div>
          <div className='row-span-1 grid grid-cols-2 h-auto gap-4 ml-20'></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MoafiatSanavat;
