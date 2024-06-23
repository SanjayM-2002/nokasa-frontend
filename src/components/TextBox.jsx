import React from 'react';

const TextBox = ({ title, details, imgSrc }) => {
  return (
    <>
      <div className='flex'>
        <div className='flex flex-row py-4 items-center'>
          <div className='flex justify-center items-center'>
            <img src={imgSrc} className='w-10 h-10' alt={imgSrc} />
          </div>
          <div className='flex flex-col flex-1 gap-2 justify-center px-24'>
            <h1 className='text-white font-bold text-2xl text-left'>{title}</h1>
            <div className='text-white font-medium text-lg text-left'>
              {details}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TextBox;
