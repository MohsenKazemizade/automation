import React from 'react';

const MainMissionTableWithCheckbox = ({ data, onChange }) => {
  return (
    <table className='relative min-w-full divide-y divide-gray-200'>
      <thead className='bg-gray-100'>
        <tr>
          <th
            scope='col'
            className='px-3 py-3 text-lg  text-gray-500 text-center '
          >
            ماموریت های اصلی
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200 overflow-scroll'>
        {data.map(item => {
          return (
            <tr key={item.ID}>
              <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                <label htmlFor={item.ID}>{item.Name}</label>
              </td>
              <td>
                <input
                  id={item.ID}
                  onChange={item => onChange(item)}
                  type='checkbox'
                  className='w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MainMissionTableWithCheckbox;
