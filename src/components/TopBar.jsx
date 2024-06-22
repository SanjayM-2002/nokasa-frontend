import React, { useState } from 'react';

const TopBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-green-1 flex flex-row justify-between items-center py-2 px-4 md:justify-around'>
      <div className='flex flex-row gap-2 justify-between items-center'>
        <img src='Leaf.png' alt='Logo' height={10} width={40} />
        <h2 className='text-white font-bold text-xl'>NoKasa</h2>
      </div>
      <div className='hidden md:flex flex-row justify-center gap-8 items-center'>
        <div className='text-white text-base'>For companies</div>
        <div className='text-white text-base'>For scrap dealers</div>
        <button className='bg-red-1 text-white font-semibold text-base justify-center px-8 py-3 transition duration-300 ease-in-out hover:bg-red-600'>
          Talk to us
        </button>
      </div>
      <div className='md:hidden'>
        <button
          onClick={toggleMenu}
          className='text-white hover:bg-slate-500 transition duration-300 ease-in-out'
        >
          <img src='/menuIcon.svg' alt='Menu Icon' className='w-6 h-6' />
        </button>
      </div>
      {menuOpen && (
        <div className='md:hidden flex flex-col items-center mt-4'>
          <div className='text-white text-base mb-2'>For companies</div>
          <div className='text-white text-base mb-2'>For scrap dealers</div>
          <button className='bg-red-1 text-white font-semibold text-base justify-center px-8 py-3 transition duration-300 ease-in-out hover:bg-red-600'>
            Talk to us
          </button>
        </div>
      )}
    </div>
  );
};

export default TopBar;
