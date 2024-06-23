import React from 'react';

const Box1 = () => {
  return (
    <div className='bg-separator1 bg-cover bg-center h-screen flex items-center justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex flex-col justify-center items-start gap-4 ps-8'>
          <img src='pricing-pattern5.png' className='w-10 h-10' />
          <h1 className='text-white font-extrabold ps-8 text-6xl'>
            Let's save the planet together
          </h1>
          <div className='text-white font-light text-xl ps-8'>
            At Nokasa, we boost recycling by bringing together consumers,
            q-commerce apps and scrap dealers.
          </div>
          <div className='flex flex-row gap-3 justify-center items-start ps-8'>
            <button className='bg-red-1 text-white font-semibold text-base justify-center px-4 py-2 transition duration-300 ease-in-out hover:bg-red-600'>
              Let's connect
            </button>
            <button className='bg-white text-red-1 font-semibold text-base justify-center px-4 py-2 transition duration-300 ease-in-out hover:bg-slate-300'>
              How it works
            </button>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <img
            src='RecycleImg.png'
            alt='Recycle'
            className='w-64 h-64 md:w-80 md:h-80'
          />
        </div>
      </div>
    </div>
  );
};

export default Box1;
