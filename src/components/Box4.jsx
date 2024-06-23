import React from 'react';
import TextBox from './TextBox';

const Box4 = () => {
  const section1 = [
    {
      title: 'Unlock new revenue streams',
      details:
        "Create a new income stream. Earn a commission on every transaction. It's not just about eco-friendly; it's profitable too.",
      img: 'section1_01.png',
    },
    {
      title: 'Get more repeat users',
      details:
        'Wallet booster cashback from recycling goes directly into your app, encouraging repeat visits and fostering loyalty.',
      img: 'section1_02.png',
    },
    {
      title: 'Polish your brand, go green',
      details:
        'Green companies attract more customers. Enhance your image by adopting eco-friendly practices. Stand out for the planet.',
      img: 'section1_03.png',
    },
  ];

  const section2 = [
    {
      title: 'Expand Your Customer Base',
      details:
        'Gain new users and increase recurring revenue without extra marketing costs.',
      img: 'section2_01.png',
    },
    {
      title: 'Accelerate Revenue Growth',
      details:
        'Nokasa makes it easier to collect more segregated solid waste, directly impacting your bottom line through efficient operations.',
      img: 'section2_02.png',
    },
    {
      title: 'Gain Valuable Insights & Analytics',
      details:
        'Access anonymized demographic data from waste collection. Gain insights to better serve your users.',
      img: 'section2_03.png',
    },
  ];
  return (
    <>
      <div className='flex flex-col bg-separator1 bg-cover bg-center justify-center gap-12 py-12 mt-24'>
        <div className='flex flex-col justify-around gap-4 items-center'>
          <div className='flex place-content-end ml-[50vh]'>
            <img src='stroke1.png' className='w-16 h-16 ' />
          </div>
          <h1 className='text-white font-bold text-center text-4xl'>
            Why partner with NoKasa
          </h1>
          <div className='text-white font-light text-xl text-center'>
            Discover the Benefits of Nokasa
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-4 justify-center'>
          <div className='flex flex-col flex-1 gap-6 items-center px-12'>
            <h1 className='text-white font-bold text-left text-5xl'>
              Empower Your Business for Profit with Purpose
            </h1>
            <div className='flex flex-col gap-2'>
              {section1.map((data, index) => (
                <TextBox
                  key={index}
                  title={data.title}
                  details={data.details}
                  imgSrc={data.img}
                />
              ))}
            </div>
          </div>
          <div className='flex flex-1 flex-col items-center justify-center'>
            <img src='companies.png' alt='companies' className='w-64 h-64 ' />
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 py-4 justify-center'>
          <div className='flex flex-1 flex-col items-center justify-center'>
            <img src='chart2.png' alt='chart2' className='w-64 h-64 ' />
          </div>
          <div className='flex flex-col flex-1 gap-6 items-center px-12'>
            <h1 className='text-white font-bold text-left text-5xl'>
              Maximizing Revenue for Trash companies
            </h1>
            <div className='flex flex-col gap-2'>
              {section2.map((data, index) => (
                <TextBox
                  key={index}
                  title={data.title}
                  details={data.details}
                  imgSrc={data.img}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Box4;
