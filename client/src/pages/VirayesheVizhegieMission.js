import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DropDownMamooriat from '../components/DropDownMamooriat';

const VirayesheVizhegieMission = () => {
  return (
    <div>
      <Header />

      <div className='grid grid-cols-2 gap-4'>
        <form className='grid grid-cols-2 gap-4 py-8 px-4'>
          <div className='grid grid-cols-2 rounded-lg h-16 text-center justify-center'>
            <span className='items-center'>ماموریت اصلی :</span>
            <DropDownMamooriat />
          </div>
          <div className='grid grid-cols-2 rounded-lg h-16 text-center justify-center'>
            <span className='items-center'>ماموریت فرعی :</span>
            <DropDownMamooriat />
          </div>

          <div className='h-12 block w-full'>ویژگی های ماموریت :</div>
          <div className='h-12 block w-full'></div>
          <div className='col-span-2 h-24 overflow-y-scroll'>
            <input
              id='default-text'
              type='text'
              value='پوتین, فعالیتهای سنگین بدنی, حمل سلاح, شرکت در صبحگاه'
              className='w-full h-full text-gray-700 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
            />
          </div>
          <div className='border rounded-lg overflow-y-scroll'>
            <table className='relative min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-100'>
                <tr>
                  <th
                    scope='col'
                    className='px-3 py-3 text-right text-lg  text-gray-500 '
                  >
                    ویژگیها
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 overflow-scroll'>
                <tr>
                  <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                    ویژگیها 1
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
                    ویژگیها 2
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
                    ویژگیها 3
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
                    ویژگیها 4
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
                    ویژگیها 5
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
                    ویژگیها 6
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
                    ویژگیها 7
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
        </form>
        <div></div>
      </div>

      <Footer />
    </div>
  );
};

export default VirayesheVizhegieMission;
