import React from 'react';

const PrintSafeRezhe = () => {
  return (
    <div>
      <div className='basis-3/4 flex flex-row w-auto rounded'>
        <div className='basis-1/5'>
          <img src={image} alt='' />
        </div>
        <div className='basis-4/5 flex flex-col overflow-x-auto '>
          <div className='basis-1/2 text-right text-sm p-1'>
            محسن کاظمی زاده بنا نیشابوری
          </div>
        </div>
      </div>
      <div className='basis-1/4 flex flex-row w-auto rounded'></div>;
    </div>
  );
};

export default PrintSafeRezhe;
