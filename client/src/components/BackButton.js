import { useNavigate } from 'react-router-dom';
import React from 'react';

const BackButton = () => {
  let navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className='py-2 px-8 mx-4 pb-2 bg-gray-300 hover:shadow-md active:shadow-sm rounded'
    >
      بازگشت
    </button>
  );
};

export default BackButton;
