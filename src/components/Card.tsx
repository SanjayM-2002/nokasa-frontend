import React from 'react';

const Card = ({ title, details, imgSrc }) => {
  return (
    <>
      <div className='flex bg-lightbg-1 border-2'>
        <div className='grid grid-cols-1 md:grid-cols-2 py-4'>
          <div className='flex flex-col flex-1 gap-2 justify-center px-24 w-7/10'>
            <h1 className='text-darkText-1 font-bold text-4xl text-center'>
              {title}
            </h1>
            <div className='text-darkText-1 font-medium text-xl text-center'>
              {details}
            </div>
          </div>
          <div className='flex flex-1 justify-center items-end w-3/10'>
            <img
              src={imgSrc}
              className='w-20 h-20 md:w-40 md:h-40 lg:w-60 lg:h-60'
              alt={imgSrc}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
