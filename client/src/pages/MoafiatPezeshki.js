import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import TableMoafiatPezeshki from '../components/TableMoafiatPezeshki';

const MoafiatPezeshki = () => {
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
            <input
              type='text'
              placeholder='کد ملی'
              className='h-12 block w-full mb-4 px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div className='h-12 block w-full'></div>
            <div className='h-12 block w-full'></div>
            <input
              type='text'
              placeholder='شماره نامه'
              className='h-12 block w-full mb-4 px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <input
              type='text'
              placeholder='تاریخ شروع'
              className='h-12 block w-full mb-4 px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <input
              type='text'
              placeholder='مدت معافیت(ماه)'
              className='h-12 block w-full mb-4 px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <input
              type='text'
              placeholder='تاریخ پایان'
              className='h-12 block w-full mb-4 px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
          </form>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <Link
                to='#'
                className='rounded-lg h-16 mb-4 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
              >
                <span className='flex items-center'>ویرایش معافیت</span>
              </Link>
              <Link
                to='#'
                className='rounded-lg h-16 flex mb-4 text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
              >
                <span className='flex items-center'>ویرایش</span>
              </Link>
              <Link
                to='#'
                className='rounded-lg h-16 flex mb-4 text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
              >
                <span className='flex items-center'>ثبت</span>
              </Link>
            </div>
            <div className='border rounded-lg overflow-y-scroll'>
              <table className='relative min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-100'>
                  <tr>
                    <th
                      scope='col'
                      className='px-3 py-3 text-right text-lg  text-gray-500 '
                    >
                      معافیت
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 overflow-scroll'>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      معافیت 1
                    </td>
                    <td>
                      <input
                        id='default-checkbox'
                        type='checkbox'
                        className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      معافیت 2
                    </td>
                    <td>
                      <input
                        id='default-checkbox'
                        type='checkbox'
                        className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      معافیت 3
                    </td>
                    <td>
                      <input
                        id='default-checkbox'
                        type='checkbox'
                        className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      معافیت 4
                    </td>
                    <td>
                      <input
                        id='default-checkbox'
                        type='checkbox'
                        className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      معافیت 5
                    </td>
                    <td>
                      <input
                        id='default-checkbox'
                        type='checkbox'
                        className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      معافیت 6
                    </td>
                    <td>
                      <input
                        id='default-checkbox'
                        type='checkbox'
                        className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      معافیت 7
                    </td>
                    <td>
                      <input
                        id='default-checkbox'
                        type='checkbox'
                        className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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

export default MoafiatPezeshki;
