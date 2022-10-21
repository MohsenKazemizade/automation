import React from 'react';
import iconSearch from '../img/search.png';

const SearchByName = () => {
  return (
    <div className='relative max-w-xs'>
      <input
        type='text'
        name='hs-table-search'
        id='hs-table-search'
        className='block w-full p-3 px-10 text-sm rounded-md ring-1 ring-gray-500 '
        placeholder='جستجوی نام خانوادگی...'
      />
      <div className='absolute inset-y-0 left-0 flex items-center px-3 py-3 pointer-events-none'>
        <img src={iconSearch} alt='' className='h-full w-full ' />
      </div>
    </div>
  );
};

export default SearchByName;
