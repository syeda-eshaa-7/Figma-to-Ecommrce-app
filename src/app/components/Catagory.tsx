'use client'

import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js

interface ImageData {
  src: string;
  alt: string;
  title: string;
  price: string;
}

const images: ImageData[] = [
  {
    src: '/chiar1.png',
    alt: 'Shooting Stars',
    title: 'Shooting Stars',
    price: '$99.99'
  },
  {
    src: '/chiar2.png',
    alt: 'The Catalyzer',
    title: 'The Catalyzer',
    price: '$199.99'
  },
  {
    src: '/chiar3.png',
    alt: 'The Chair',
    title: 'Comfortable Chair',
    price: '$149.99'
  }
  // Add more images as needed
];

const Catagory = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-3xl mb-2 sm:mb-0">CATEGORY</h1>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {images.map((image, index) => (
            <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6 relative group">
              <div className="rounded-lg overflow-hidden relative">
                <Image
                  alt={image.alt}
                  className="object-cover object-center w-full h-full"
                  src={image.src}
                  width={480} // Set the width for Image component
                  height={480} // Set the height for Image component
                  style={{
                    borderRadius: '10px 0px 0px 0px',
                    transition: 'opacity 0.3s ease', // Smooth transition for opacity
                  }}
                />
                
                {/* Hover effect for the gray overlay with transparency */}
                <div className="absolute bottom-0 left-0 right-0 w-full h-1/4 bg-gray-700 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center pl-4">
                  {/* Price on the left corner of the gray overlay */}
                  <p className="text-white text-xl font-semibold">{image.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Catagory;
