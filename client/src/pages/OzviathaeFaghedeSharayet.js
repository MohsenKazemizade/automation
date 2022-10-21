import React from 'react';
import TableRade from '../components/TableRade';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import DropDownMamooriat from '../components/DropDownMamooriat';
import TableMoafiatRade from '../components/TableMoafiatRade';

const OzviathaeFaghedeSharayet = () => {
  return (
    <div>
      <Header title='' />
      <div className='grid grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 gap-8 p-4'>
          <div>
            <TableRade />
          </div>
          <div className='grid grid-rows-3'>
            <div className='row-span-2 grid grid-cols-2 grid-rows-8 gap-4'>
              <div className='rounded-lg h-16 flex text-center justify-center'>
                <span className='flex items-center'>ماموریت اصلی :</span>
              </div>
              <div></div>

              <div className='col-span-2'>
                <DropDownMamooriat />
              </div>
              <div className='rounded-lg h-16 flex text-center justify-center'>
                <span className='flex items-center'>ماموریت فرعی :</span>
              </div>
              <div></div>

              <div className='col-span-2'>
                <DropDownMamooriat />
              </div>
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
              {/* <div className='col-span-2'>
                    <label htmlFor='vasiat'>
                      <input
                        type='checkbox'
                        name='vasiat'
                        id=''
                        className='cursor-pointer m-4'
                      />
                      مشاهده آخرین
                    </label>
                  </div> */}
              <div className='rounded-lg h-16 flex text-center justify-center'>
                <span className='flex items-center'>وضعیت :</span>
              </div>
              <div></div>

              <div className='col-span-2'>
                <DropDownMamooriat />
              </div>
              <Link
                to='#'
                className='col-span-2 rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
              >
                <span className='flex items-center'>پاکسازی</span>
              </Link>
              <Link
                to='#'
                className='col-span-2 rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
              >
                <span className='flex items-center'>ثبت</span>
              </Link>
            </div>
          </div>
        </div>
        <div className=' my-20 ml-20'>
          <TableMoafiatRade />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OzviathaeFaghedeSharayet;
