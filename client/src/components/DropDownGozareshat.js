import React from 'react';

const DropDownGozareshat = () => {
  return (
    <div className='relative w-full lg:max-w-sm'>
      <select className='w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'>
        <option>حضور و غیاب</option>
        <option>حضور غیاب و امتیازبندی</option>
        <option>امتیازبندی</option>
      </select>
    </div>
  );
};

export default DropDownGozareshat;
