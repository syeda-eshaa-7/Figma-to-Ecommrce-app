// components/Featured.tsx
'use client'

import React from 'react';
import Card from './ProductsCard';

interface ImageData {
  src: string;
  alt: string;
  title: string;
  price: string;
}

const images: ImageData[] = [
  {
    src: '/Image (1).png',
    alt: 'Shooting Stars',
    title: 'Shooting Stars',
    price: '$99.99'
  },
  {
    src: '/Image (2).png',
    alt: 'The Catalyzer',
    title: 'The Catalyzer',
    price: '$199.99'
  },
  {
    src: '/Image (3).png',
    alt: 'The Chair',
    title: 'Comfortable Chair',
    price: '$149.99'
  }
];

const Featured: React.FC = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col mb-12">
          <div className="flex flex-wrap sm:flex-row flex-col py-6">
            <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-3xl mb-2 sm:mb-0">
              FEATURED PRODUCTS
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center sm:-m-4 -mx-4 -mb-10 -mt-4">
          {images.map((image, index) => (
            <Card 
              key={index} 
              src={image.src} 
              alt={image.alt} 
              title={image.title} 
              price={image.price} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
