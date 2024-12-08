import React from 'react';
import Image from 'next/image';

const Explor = () => {
  // Array of smaller grid images
  const gridImages = [
    '/chiar1.png',
    '/white-cheir.png',
    '/white-foam-chair.png',
    '/Image (1).png', // Add your actual image paths here
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Main Container */}
      <div className="relative flex flex-wrap gap-4">
        {/* Rotated Main Heading */}
        <h1 className="absolute top-[300px] left-[-320px] text-4xl rotate-90 z-10">
          Explore new and popular cool styles
        </h1>

        {/* Main Image */}
        <div className="relative w-[670px] h-[670px]">
          <Image
            alt="Chair"
            src={'/Image (2).png'}
            width={648}
            height={648}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Grid of 4 smaller images */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {gridImages.map((src, index) => (
            <div key={index} className="relative w-[312px] h-[312px] p-1">
              <Image
                alt={`Small image ${index + 1}`}
                src={src}
                width={312}
                height={312}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explor;
