import React from 'react';
import Card from './Card';

const Box3 = () => {
  const cardData = [
    {
      title: 'Turning Trash into Treasure',
      details:
        'Turn your recyclables into cashback rewards, making each contribution to the environment rewarding and fulfilling.',
      img: 'Treasure.png',
    },
    {
      title: 'Fostering a circular economy',
      details:
        'Join us in building a circular economy where waste is transformed into valuable resources, ensuring a more sustainable future for all.',
      img: 'Card2img.png',
    },
    {
      title: 'Addressing the core',
      details:
        "We're at the forefront of tackling waste at its source, offering a sustainable solution to minimise environmental impact.",
      img: 'Card3img.png',
    },
    {
      title: 'Driving Green Initiatives Forward',
      details:
        'With Nokasa, increase the collection of recyclable waste, driving up recycling rates and creating a cleaner, greener future.',
      img: 'Card4img.png',
    },
  ];
  return (
    <>
      <div className='flex flex-col px-8'>
        <div className='flex flex-col gap-8'>
          <h1 className='text-darkText-1 font-bold text-6xl text-center'>
            Benefits of Nokasa
          </h1>
          <div className='text-darkText-1 font-medium text-xl text-center'>
            Discover the Benefits of Nokasa
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                details={card.details}
                imgSrc={card.img}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Box3;
