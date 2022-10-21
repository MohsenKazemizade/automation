import React from 'react';
import SafeRezhe from '../components/SafeRezhe';
import PayvarForm from '../components/PayvarForm';

const EdittingRezhe = () => {
  return (
    <div className='flex flex-row'>
      <PayvarForm />
      <SafeRezhe />
    </div>
  );
};

export default EdittingRezhe;
