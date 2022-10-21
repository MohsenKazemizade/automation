import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Table from '../components/Table';
import DropDownMamooriat from '../components/DropDownMamooriat';
import { Link } from 'react-router-dom';

const ModiriatAfzaesheShift = () => {
  return (
    <div>
      <Header title='' />
      <div className='grid grid-cols-3 gap-4'>
        <div className='grid gap-4'>
          <div className='m-4'>
            <div className='grid grid-cols-3 grid-rows-5 gap-4'>
              <div className='rounded-lg h-16 flex text-center justify-center'>
                <span className='flex items-center'>ماموریت اصلی :</span>
              </div>

              <div className='col-span-3'>
                <DropDownMamooriat />
              </div>
              <div className='rounded-lg h-16 flex text-center justify-center'>
                <span className='flex items-center'>ماموریت فرعی :</span>
              </div>

              <div className='col-span-3'>
                <DropDownMamooriat />
              </div>

              <Link
                to='#'
                className='rounded-lg h-16 flex text-center justify-center bg-gray-100 cursor-pointer hover:shadow-md active:shadow-sm'
              >
                <span className='flex items-center'>ثبت</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-span-2 overflow-scroll h-96 my-20 ml-20'>
          <Table />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModiriatAfzaesheShift;
