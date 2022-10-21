import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const NewMission = () => {
  return (
    <div>
      <Header />

      <div className='grid grid-cols-3 gap-4'>
        <div className='grid grid-cols-2 gap-4 p-8'>
          <form className='col-span-2 grid grid-cols-2 gap-4'>
            <input
              type='text'
              placeholder='نام ماموریت'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div className='h-12 block w-full'></div>
            <div class='flex items-center'>
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
                اصلی
              </label>
            </div>
            <div class='flex items-center'>
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
                فرعی
              </label>
            </div>
          </form>
          <div className='col-span-2 grid grid-cols-2 row-span-2 gap-2'>
            <div className='border rounded-lg overflow-y-scroll max-h-64'>
              <table className='relative min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-100'>
                  <tr>
                    <th
                      scope='col'
                      className='px-3 py-3 text-lg  text-gray-500 text-center '
                    >
                      ماموریت اصلی
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 overflow-scroll'>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      ماموریت 1
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
                      ماموریت 2
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
                      ماموریت 3
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
                      ماموریت 4
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
                      ماموریت 5
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
                      ماموریت 6
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
                      ماموریت 7
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
            <div className='border rounded-lg overflow-y-scroll max-h-64'>
              <table className='relative min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-100'>
                  <tr>
                    <th
                      scope='col'
                      className='px-3 py-3 text-right text-lg  text-gray-500 '
                    >
                      ماموریت فرعی
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 overflow-scroll'>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      ماموریت 1
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
                      ماموریت 2
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
                      ماموریت 3
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
                      ماموریت 4
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
                      ماموریت 5
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
                      ماموریت 6
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
                      ماموریت 7
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
          <Link
            to='#'
            className='rounded-lg col-span-2 h-16 flex mb-4 text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
          >
            <span className='flex items-center'>ثبت</span>
          </Link>
          <Link
            to='/virayeshevizheghiemission'
            className='rounded-lg h-16 flex col-span-2 mb-4 text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
          >
            <span className='flex items-center'>ویرایش ویژگی ها</span>
          </Link>
        </div>
        <div className='col-span-2 grid grid-cols-3 py-8 gap-4'>
          <div className='grid grid-rows-2 gap-4'>
            <div className='border rounded-lg overflow-y-scroll max-h-72'>
              <table className='relative min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-100'>
                  <tr>
                    <th
                      scope='col'
                      className='px-3 py-3 text-lg  text-gray-500 text-center '
                    >
                      ماموریت اصلی
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 overflow-scroll'>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      ماموریت 1
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      ماموریت 2
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      ماموریت 3
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      ماموریت 4
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      ماموریت 5
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      ماموریت 6
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      ماموریت 7
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='border rounded-lg overflow-y-scroll max-h-72'>
              <table className='relative min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-100'>
                  <tr>
                    <th
                      scope='col'
                      className='px-3 py-3 text-center text-lg  text-gray-500 '
                    >
                      ماموریت فرعی
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 overflow-scroll'>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      ماموریت 1
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      ماموریت 2
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      ماموریت 3
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      ماموریت 4
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      ماموریت 5
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      ماموریت 6
                    </td>
                  </tr>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      ماموریت 7
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='col-span-2 grid grid-cols-2 gap-4 p-8'>
            <form className='col-span-2 grid grid-cols-2'>
              <input
                type='text'
                placeholder='نام ماموریت'
                className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
              />
              <div className='h-12 block w-full'></div>
              <div className='grid grid-cols-3 col-span-2'>
                <div className='flex w-full item-center'>نوع ماموریت :</div>
                <div class='flex items-center'>
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
                    اصلی
                  </label>
                </div>
                <div class='flex items-center'>
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
                    فرعی
                  </label>
                </div>
              </div>
            </form>
            <div className='col-span-2 grid grid-cols-2 row-span-2 gap-2'>
              <div className='border rounded-lg overflow-y-scroll max-h-64'>
                <table className='relative min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-100'>
                    <tr>
                      <th
                        scope='col'
                        className='px-3 py-3 text-lg  text-gray-500 text-center '
                      >
                        ویژگی های ماموریت
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 overflow-scroll'>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ویژگی 1
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ویژگی 2
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ویژگی 3
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ویژگی 4
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ویژگی 5
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ویژگی 6
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ویژگی 7
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='border rounded-lg overflow-y-scroll max-h-64'>
                <table className='relative min-w-full divide-y divide-gray-200'>
                  <thead className='bg-gray-100'>
                    <tr>
                      <th
                        scope='col'
                        className='px-3 py-3 text-center text-lg  text-gray-500 '
                      >
                        ماموریت فرعی
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 overflow-scroll'>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ماموریت 1
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ماموریت 2
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ماموریت 3
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ماموریت 4
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ماموریت 5
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ماموریت 6
                      </td>
                    </tr>
                    <tr>
                      <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                        ماموریت 7
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewMission;
