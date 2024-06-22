import React from 'react';

const Box2 = () => {
  return (
    <>
      <div className='flex flex-col'>
        <div className='flex justify-end -mb-60 '>
          <img src='Handup.png' className='w-90 h-80' />
        </div>
        <div className='flex flex-col gap-2 justify-center px-24 md:px-36 lg:px-52 xl:px-96'>
          <div className='flex items-start'>
            <img src='pricing-pattern1.png' className='w-16 h-16 ' />
          </div>
          <h1 className='text-darkText-1 font-bold text-6xl text-center'>
            Boosting Recycling, One Transaction at a Time
          </h1>
          <div className='text-darkText-1 font-medium text-xl text-center'>
            In a nation where only 7% of waste is recycled, Nokasa offers a
            transformative solution. Say goodbye to clutter & hello to cashback
            rewards on your favourite q-commerce apps. Nokasa simplifies
            recycling with its innovative APIs, making scheduling scrap pickups
            a breeze. Integrated seamlessly with q-commerce platforms, Nokasa
            makes recycling easy, rewarding, and convenient. Join us in our
            mission to boost recycling rates and create a cleaner planet, one
            transaction at a time.
          </div>
          <div className='flex place-content-end'>
            <img src='pricing-pattern2.png' className='w-16 h-16 ' />
          </div>
        </div>
        <div className='flex -mt-28'>
          <img
            src='Handdown.png'
            className='w-90 h-80 justify-start bottom-2'
          />
        </div>
      </div>
    </>
  );
};

export default Box2;
