import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import DropDownMainMission from '../components/DropDownMainMission';
import TableEtelaateDasteha from '../components/TableEtelaateDasteha';

const VirayesheSayereAfrad = () => {
  return (
    <div>
      <Header />

      <div className='grid grid-cols-3 gap-4'>
        <div className='p-8'>
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
            <div className='rounded-lg h-12 flex text-center justify-center'>
              <span className='flex text-xl items-center'>
                زمان بندی و اطلاعات دسته :
              </span>
            </div>
            <div className='h-12 block w-full'></div>
            <Link
              to='#'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>نمایش زمان بندی</span>
            </Link>
            <Link
              to='#'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>ذخیره زمان بندی</span>
            </Link>
            <Link
              to='#'
              className='col-span-2 rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>ذخیره اطلاعات دسته ها</span>
            </Link>
            <div className='rounded-lg h-12 flex text-center justify-center'>
              <span className='flex text-xl items-center'>لیست کل :</span>
            </div>
            <div className='h-12 block w-full'></div>
            <Link
              to='#'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>نمایش</span>
            </Link>
            <Link
              to='#'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>ذخیره</span>
            </Link>
            <div className='rounded-lg h-12 flex text-center justify-center'>
              <span className='flex text-xl items-center'>
                لیست سایر افراد :
              </span>
            </div>
            <div className='h-12 block w-full'></div>
            <Link
              to='#'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>نمایش</span>
            </Link>
            <Link
              to='#'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>ذخیره</span>
            </Link>
            <div className='rounded-lg h-12 flex text-center justify-center'>
              <span className='flex text-xl items-center'>تایید نهایی :</span>
            </div>
            <Link
              to='#'
              className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
            >
              <span className='flex items-center'>تایید</span>
            </Link>
          </form>
        </div>
        <div className='col-span-2 grid grid-rows-3 gap-4 p-8'>
          <TableEtelaateDasteha />
          <table className='relative min-w-full divide-y divide-gray-200'>
            <thead className='bg-gray-50'>
              <tr>
                <th
                  scope='col'
                  className='px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  0
                </th>
                <th
                  scope='col'
                  className='px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  0
                </th>
                <th
                  scope='col'
                  className='px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  0
                </th>
                <th
                  scope='col'
                  className='px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  0
                </th>
                <th
                  scope='col'
                  className='px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  0
                </th>
                <th
                  scope='col'
                  className='px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  :مجموع
                </th>
                <th
                  scope='col'
                  className='px-3 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider'
                ></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VirayesheSayereAfrad;
