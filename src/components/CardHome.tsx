import { CardProps } from 'interface/type';
import React from 'react';

const CardHome: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className='h-[300px] w-[200px] bg-white'>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default CardHome;
