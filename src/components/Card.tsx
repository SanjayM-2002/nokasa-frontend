import React from 'react';

const Card = ({ title, details, imgSrc }) => {
  return (
    <div className='flex bg-lightbg-1 border-2'>
      <div className='grid grid-cols-1 md:grid-cols-3 py-4 w-full'>
        <div className='col-span-2 flex flex-col gap-2 justify-center px-24'>
          <h1 className='text-darkText-1 font-bold text-4xl text-center'>
            {title}
          </h1>
          <div className='text-darkText-1 font-medium text-xl text-center'>
            {details}
          </div>
        </div>
        <div className='col-span-1 flex justify-center items-center'>
          <img
            src={imgSrc}
            className='w-20 h-20 md:w-40 md:h-40 lg:w-60 lg:h-60'
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
