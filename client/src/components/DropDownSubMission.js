import React from 'react';

const DropDownSubMission = ({ subByMainIdData, handleSubSelect }) => {
  const handleSelect = e => {
    e.preventDefault();

    if (e.target.value !== '') {
      handleSubSelect(e);
    }
  };
  return (
    <div className='relative w-full lg:max-w-sm'>
      <select
        name='subId'
        onChange={handleSelect}
        className='w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'
      >
        <option></option>
        {subByMainIdData.map(item => {
          return (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDownSubMission;
