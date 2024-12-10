// components/Card.tsx
'use client'

import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi';
import Image from 'next/image';

interface CardProps {
  src: string;
  alt: string;
  title: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ src, alt, title, price }) => {
  return (
    <div className="p-4 md:w-1/3 sm:w-full w-full mb-6 relative group">
      <div className="rounded-lg h-64 overflow-hidden relative">
        <Link href={`/products/${encodeURIComponent(title.toLowerCase().replace(/ /g, '-'))}`}>
          <Image 
            alt={alt} 
            className="object-cover object-center h-full w-full transition-transform duration-300 group-hover:scale-105" 
            src={src} 
            width={500} // Adjust width as needed
            height={400} // Adjust height as needed
          />
        </Link>
      </div>

      <div className="mt-5 space-y-2">
        <h2 className="text-xl font-medium title-font text-gray-900">
          {title}
        </h2>
        <p className="text-lg font-semibold text-gray-800">
          {price}
        </p>
      </div>

      <div className="absolute bottom-2 right-2 text-black p-2 rounded-full">
        <Link
          href="/singlepage"
          className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-300 transition"
        >
          <FiShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default Card;
