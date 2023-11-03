/* eslint-disable @typescript-eslint/no-explicit-any */
import CardHome from 'components/CardHome';
import React from 'react';

function Index() {
  const listCard = [
    {
      title: 'Hola',
      description: 'Mundo',
    },
    {
      title: 'Hola',
      description: 'Mundo',
    },
    {
      title: 'que',
      description: 'hace',
    },
  ];

  return (
    <div className='flex h-[90vh] flex-col bg-primary'>
      <h1>Menu</h1>
      {listCard.map((item: any, index: number) => (
        <CardHome
          key={index}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Index;
