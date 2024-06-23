import React from 'react';

const Card = ({ title, details, imgSrc }) => {
  return (
    <>
      <div className='flex bg-lightbg-1 border-2'>
        <div className='flex flex-row py-4'>
          <div className='flex flex-col flex-1 gap-2 justify-center px-24'>
            <h1 className='text-darkText-1 font-bold text-4xl text-center'>
              {title}
            </h1>
            <div className='text-darkText-1 font-medium text-xl text-center'>
              {details}
            </div>
          </div>
          <div className='flex flex-1 justify-center items-end'>
            <img src={imgSrc} className='w-60 h-60' alt={imgSrc} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
