import React from 'react';
import { Disclosure } from '@headlessui/react';

export default function Example() {
  return (
    <Disclosure as='nav' className='bg-gray-800'>
      <>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-16 items-center justify-between'>
            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex flex-shrink-0 items-center text-white font-bold text-lg'>
                پنل مدیریت سرمایه انسانی پایوران
              </div>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
