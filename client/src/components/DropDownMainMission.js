import React from 'react';

const DropDownMainMission = ({ mainData, handleMainSelect }) => {
  const handleSelect = e => {
    e.preventDefault();

    if (e.target.value !== '') {
      handleMainSelect(e);
    }
  };
  return (
    <div className='relative w-full lg:max-w-sm'>
      <select
        onChange={handleSelect}
        className='w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600'
      >
        <option></option>
        {mainData.map(item => {
          return (
            <option key={item.ID} value={item.ID}>
              {item.Name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDownMainMission;
