import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import DropDownGozareshat from '../components/DropDownGozareshat';

const Gozareshat = () => {
  return (
    <div>
      <Header />

      <div className='grid grid-cols-3 gap-4'>
        <div className=' p-8'>
          <form className='grid grid-rows-2 gap-4'>
            <div>
              <div className='rounded-lg h-12 flex text-center justify-center'>
                <span className='flex items-center'>ماموریت اصلی :</span>
              </div>

              <div className='border rounded-lg max-h-48 overflow-y-scroll'>
                <table className='relative min-w-full  divide-y divide-gray-200'>
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
            <div>
              <div className='rounded-lg h-16 flex text-center justify-center'>
                <span className='flex items-center'>ماموریت فرعی :</span>
              </div>

              <div className='border rounded-lg max-h-48 overflow-y-scroll'>
                <table className='relative min-w-full  divide-y divide-gray-200'>
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
          </form>
        </div>
        <div className='col-span-2 grid grid-cols-3'>
          <form className='grid gap-4 p-8'>
            <input
              type='text'
              placeholder='کد پرسنلی'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />

            <input
              type='text'
              placeholder='نام'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />

            <input
              type='text'
              placeholder='نام خانوادگی'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />

            <input
              type='text'
              placeholder='رده'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <input
              type='text'
              placeholder='از تاریخ'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <input
              type='text'
              placeholder='تا تاریخ'
              className='h-12 block w-full px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
          </form>
          <div className='grid grid-rows-2 gap-4 p-8'>
            <div className='border rounded-lg max-h-60 overflow-y-scroll'>
              <table className='relative min-w-full  divide-y divide-gray-200'>
                <thead className='bg-gray-100'>
                  <tr>
                    <th
                      scope='col'
                      className='px-3 py-3 text-right text-lg  text-gray-500 '
                    >
                      رده ها
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 overflow-scroll'>
                  <tr>
                    <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                      رده 1
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
                      رده 2
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
                      رده 3
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
                      رده 4
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
                      رده 5
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
                      رده 6
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
                      رده 7
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
            <div className='grid grid-cols-2 gap-4'>
              <div className='rounded-lg h-16 flex text-center justify-center'>
                <span className='flex items-center'>نوع گزارش :</span>
              </div>
              <div className='col-span-2'>
                <DropDownGozareshat />
              </div>
              <div class='flex items-center mb-4'>
                <input
                  id='country-option-1'
                  type='radio'
                  name='countries'
                  value='USA'
                  class='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600'
                  checked
                />
                <label
                  for='country-option-1'
                  class='block mr-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  فردی
                </label>
              </div>
              <div class='flex items-center mb-4'>
                <input
                  id='country-option-1'
                  type='radio'
                  name='countries'
                  value='USA'
                  class='w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600'
                  checked
                />
                <label
                  for='country-option-1'
                  class='block mr-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                >
                  رده ای
                </label>
              </div>
              <Link
                to='#'
                className='col-span-2 rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
              >
                <span className='flex items-center'>نمایش اطلاعات</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gozareshat;
