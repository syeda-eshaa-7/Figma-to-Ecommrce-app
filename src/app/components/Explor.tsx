
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
    <div className="flex items-center justify-center min-h-screen px-4">
      {/* Main Container */}
      <div className="relative flex flex-col lg:flex-row gap-4">
        {/* Main Heading */}
        <h1 className="text-center text-lg md:text-2xl lg:text-4xl lg:absolute lg:top-[300px] lg:left-[-320px] lg:rotate-90 z-10">
          Explore new and popular cool styles
        </h1>

        {/* Main Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] lg:w-[670px] lg:h-[670px]">
          <Image
            alt="Chair"
            src={'/Image (2).png'}
            width={648}
            height={648}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Grid of 4 smaller images */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-4">
          {gridImages.map((src, index) => (
            <div
              key={index}
              className="relative w-full h-[150px] sm:h-[200px] md:h-[250px] lg:w-[312px] lg:h-[312px] p-1"
            >
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
