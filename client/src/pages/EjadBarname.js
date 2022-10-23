import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import DropDownMainMission from '../components/DropDownMainMission';

const EjadBarname = () => {
  return (
    <div>
      <Header />

      <div className='grid grid-cols-3 gap-4'>
        <div className=' p-8'>
          <form className='grid grid-cols-2 gap-4'>
            <div className='rounded-lg h-12 flex text-center justify-center'>
              <span className='flex items-center'>ماموریت اصلی :</span>
            </div>

            <div>
              <DropDownMainMission />
            </div>
            <div className='rounded-lg h-16 flex text-center justify-center'>
              <span className='flex items-center'>ماموریت فرعی :</span>
            </div>

            <div>
              <DropDownMainMission />
            </div>
            <input
              type='text'
              placeholder='تاریخ شروع'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div className='h-12 block w-full'></div>
            <input
              type='text'
              placeholder='تاریخ پایان'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div className='h-12 block w-full'></div>
            <input
              type='text'
              placeholder='مدت هر دوره به روز'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div className='h-12 block w-full'></div>
            <input
              type='text'
              placeholder='تعداد دوره ها'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div className='h-12 block w-full'></div>

            <input
              type='text'
              placeholder='تعداد افراد مورد نیاز هر دوره'
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
          <div className='grid grid-cols-2 gap-4'>
            <div className='rounded-lg h-16 flex text-center justify-center'>
              <span className='flex items-center'>شیفت های مستثنی :</span>
            </div>
            <div className='border rounded-lg max-h-48 overflow-y-scroll'>
              <table className='relative min-w-full  divide-y divide-gray-200'>
                <thead className='bg-gray-100'>
                  <tr>
                    <th
                      scope='col'
                      className='px-3 py-3 text-right text-lg  text-gray-500 '
                    >
                      شیفتها
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 overflow-scroll'>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      شیفت 1
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
                      شیفت 2
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
                      شیفت 3
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
                      شیفت 4
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
                      شیفت 5
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
                      شیفت 6
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
                      شیفت 7
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
            <input
              type='text'
              placeholder='بیشترین تعداد مازاد'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div className='h-12 block w-full'></div>
            <Link
              to='#'
              className='col-span-2 rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>نمایش اطلاعات</span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EjadBarname;
