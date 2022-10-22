import React from 'react';

const SubMissionTable = ({ data }) => {
  return (
    <table className='relative min-w-full divide-y divide-gray-200'>
      <thead className='bg-gray-100'>
        <tr>
          <th
            scope='col'
            className='px-3 py-3 text-center text-lg  text-gray-500 '
          >
            ماموریت های فرعی
          </th>
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200 overflow-scroll'>
        {data.map(item => {
          return (
            <tr key={item.ID}>
              <td className='px-3 py-4 text-sm text-gray-800 whitespace-nowrap'>
                {item.Name}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default SubMissionTable;
