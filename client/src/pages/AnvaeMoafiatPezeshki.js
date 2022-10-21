import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const AnvaeMoafiatPezeshki = () => {
  return (
    <div>
      <Header />

      <div className='grid grid-cols-3 gap-4'>
        <div className=' p-8'>
          <form className='grid grid-cols-2 gap-4'>
            <div className='rounded-lg h-12 flex text-center justify-center'>
              <span className='flex items-center'>نوع معافیت پزشکی :</span>
            </div>
            <input
              type='text'
              className='h-12 block w-full mb-4 px-2 py-1 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 '
            />
            <div className='h-12 block w-full'></div>
            <Link
              to='#'
              className='rounded-lg h-16 flex mb-4 text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>افزودن به انواع معافیت</span>
            </Link>
          </form>
        </div>
        <div className='grid grid-rows-3 gap-2'>
          <div className='row-span-2 overflow-scroll h-96 mt-20 ml-20'>
            <table className='relative min-w-full  divide-y divide-gray-200'>
              <thead className='bg-gray-100'>
                <tr>
                  <th
                    scope='col'
                    className='px-3 py-3 text-right text-lg  text-gray-500 '
                  >
                    نوع معافیت پزشکی
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 overflow-scroll'>
                <tr>
                  <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                    معافیت پزشکی 1
                  </td>
                </tr>
                <tr>
                  <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                    معافیت پزشکی 2
                  </td>
                </tr>
                <tr>
                  <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                    معافیت پزشکی 3
                  </td>
                </tr>
                <tr>
                  <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                    معافیت پزشکی 4
                  </td>
                </tr>
                <tr>
                  <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                    معافیت پزشکی 5
                  </td>
                </tr>
                <tr>
                  <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                    معافیت پزشکی 6
                  </td>
                </tr>
                <tr>
                  <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                    معافیت پزشکی 7
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='grid grid-cols-2 h-auto gap-4 ml-20'></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AnvaeMoafiatPezeshki;
