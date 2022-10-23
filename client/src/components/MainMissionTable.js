import React from 'react';

const MainMissionTable = ({ data, selectMainMission }) => {
  const handleClick = e => {
    e.preventDefault();
    selectMainMission(e);
  };
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
        </tr>
      </thead>
      <tbody className='divide-y divide-gray-200 overflow-scroll'>
        {data.map(item => {
          return (
            <tr key={item.ID}>
              <td className='h-12 text-sm'>
                <button
                  id={item.ID}
                  className='w-full h-12 cursor-pointer active:bg-slate-200 hover:bg-slate-100 text-gray-800 whitespace-nowrap'
                  onClick={handleClick}
                >
                  {item.Name}
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MainMissionTable;
