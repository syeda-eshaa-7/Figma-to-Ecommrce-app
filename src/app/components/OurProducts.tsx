// 'use client'
// import Link from 'next/link';
// import React from 'react';
// import { FiShoppingCart } from 'react-icons/fi';
// import Image from 'next/image';  // Import Image from Next.js

// interface ImageData {
//   src: string;
//   alt: string;
//   title: string;
//   price: string;  // Added price property
// }

// const images: ImageData[] = [
//   {
//     src: '/Image (1).png',
//     alt: 'Shooting Stars',
//     title: 'Shooting Stars',
//     price: '$99.99'  // Added price
//   },
//   {
//     src: '/Image (2).png',
//     alt: 'The Catalyzer',
//     title: 'The Catalyzer',
//     price: '$199.99'  // Added price
//   },
//   {
//     src: '/Image (3).png',
//     alt: 'The Chair',
//     title: 'Comfortable Chair',
//     price: '$149.99'  // Added price
//   },
//   {
//     src: '/white-foam-chair.png',
//     alt: 'The Chair',
//     title: 'Comfortable Chair',
//     price: '$149.99'  // Added price
//   },
//   {
//     src: '/white-foam-chair.png',
//     alt: 'The Chair',
//     title: 'Comfortable Chair',
//     price: '$149.99'  // Added price
//   },
//   {
//     src: '/Image.png',
//     alt: 'The Chair',
//     title: 'Comfortable Chair',
//     price: '$149.99'  // Added price
//   }
//   // Add more images as needed
// ];

// const OurProducts = () => {
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-col">
//           <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12 justify-center">
//             <h1 className="text-center sm:w-2/5 text-gray-900 font-bold title-font text-3xl mb-2 sm:mb-0">
//               OUR PRODUCTS
//             </h1>
//           </div>
//         </div>
//         <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
//           {images.map((image, index) => (
//             <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6 relative">
//               <div className="rounded-lg h-64 overflow-hidden relative">
//                 {/* Wrap the image with a Link component */}
//                 <Link href={`/product/${image.title}`} passHref>
//                   <Image
//                     alt={image.alt}
//                     className="object-cover object-center h-full w-full cursor-pointer"
//                     src={image.src}
//                     width={500} // Adjust width as per your needs
//                     height={400} // Adjust height as per your needs
//                   />
//                 </Link>
//               </div>

//               {/* Product Title */}
//               <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{image.title}</h2>

//               {/* Price */}
//               <p className="text-lg text-gray-800 mt-2">{image.price}</p>

//               {/* Cart Icon - Bottom Center */}
//               <div className="absolute bottom-2 right-2 text-black p-2 rounded-full">
//                 <Link
//                   href="/productdetails"
//                   className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-300 transition"
//                 >
//                   <FiShoppingCart />
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurProducts;


// OurProducts.tsx
// OurProducts.tsx
import React from 'react';
import ProductCard from '../components/ProductsCard'; // Import the ProductCard component

interface ImageData {
  src: string;
  alt: string;
  title: string;
  price: string; // Added price property
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

const OurProducts = () => {
  return (
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
  );
};

export default OurProducts;
