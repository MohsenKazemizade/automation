import React from 'react';
import Table from '../components/Table';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import BarchartShift from '../components/BarchartShift';
import DropDownListShift from '../components/DropDownListShift';
import TableTedadHarMoavenatDarShift from '../components/TableTedadHarMoavenatDarShift';

const GordanEhtiatList = () => {
  return (
    <div>
      <Header />

      <div className='grid grid-cols-3 gap-4'>
        <div className='grid gap-4'>
          <div className='m-4'>
            <div className='grid grid-cols-3 grid-rows-3 gap-4'>
              <div className='col-span-3'></div>

              <Link
                to='/gordanehtiat/modiriatafzaesheshift'
                className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
              >
                <span className='flex items-center'>مدیریت افزایش شیفت</span>
              </Link>
              <Link
                to='/gordanehtiat/modiriatkahesheshift'
                className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
              >
                <span className='flex items-center'>مدیریت کاهش شیفت</span>
              </Link>
              <Link
                to='#'
                className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
              >
                <span className='flex items-center'>لغو انتخاب</span>
              </Link>
              <Link
                to='#'
                className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
              >
                <span className='flex items-center'>ویرایش</span>
              </Link>
              <DropDownListShift />
            </div>
          </div>
        </div>
        <div className='col-span-2 grid grid-rows-3 gap-2'>
          <div className='row-span-2 overflow-scroll h-96 mt-20 ml-20'>
            <Table />
          </div>
          <div className='row-span-1 grid grid-cols-2 h-auto gap-4 ml-20'>
            <div className='col-span-1'>
              <BarchartShift />
            </div>
            <div className='col-span-1 overflow-scroll h-60'>
              <TableTedadHarMoavenatDarShift />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GordanEhtiatList;
