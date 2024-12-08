'use client'
import React from 'react'
import Newslatter from '../components/Newslatter'
import ProductCard from '@/app/components/ProductsCard'

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
    price: '$99.99',
  },
  {
    src: '/Image (2).png',
    alt: 'The Catalyzer',
    title: 'The Catalyzer',
    price: '$199.99',
  },
  {
    src: '/Image (3).png',
    alt: 'The Chair',
    title: 'Comfortable Chair',
    price: '$149.99',
  },
  {
    src: '/white-foam-chair.png',
    alt: 'The Chair',
    title: 'Comfortable Chair',
    price: '$149.99',
  },
  {
    src: '/Image.png',
    alt: 'The Chair',
    title: 'Comfortable Chair',
    price: '$149.99',
  },
  {
    src: '/white-foam-chair.png',
    alt: 'The Chair',
    title: 'Comfortable Chair',
    price: '$149.99',
  }
];

const Page = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12 justify-center">
              <h1 className="text-center sm:w-2/5 text-gray-900 font-bold title-font text-3xl mb-2 sm:mb-0">
                OUR PRODUCTS
              </h1>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            {images.map((product, index) => (
              <ProductCard
                key={index}
                src={product.src}
                alt={product.alt}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>
      <Newslatter />
    </div>
  )
}

export default Page;
