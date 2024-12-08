// 'use client'

// import Link from 'next/link';
// import React from 'react';
// import { FiShoppingCart } from 'react-icons/fi';
// import Image from 'next/image'; // Import Image from Next.js

// interface ImageData {
//   src: string;
//   alt: string;
//   title: string;
//   price: string;
// }

// const images: ImageData[] = [
//   {
//     src: '/Image (1).png',
//     alt: 'Shooting Stars',
//     title: 'Shooting Stars',
//     price: '$99.99'
//   },
//   {
//     src: '/Image (2).png',
//     alt: 'The Catalyzer',
//     title: 'The Catalyzer',
//     price: '$199.99'
//   },
//   {
//     src: '/Image (3).png',
//     alt: 'The Chair',
//     title: 'Comfortable Chair',
//     price: '$149.99'
//   }
// ];

// const Featured: React.FC = () => {
//   return (
//     <section className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-col">
//           <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
//             <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-3xl mb-2 sm:mb-0">
//               FEATURED PRODUCTS
//             </h1>
//           </div>
//         </div>
//         <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
//           {images.map((image, index) => (
//             <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6 relative group">
//               <div className="rounded-lg h-64 overflow-hidden relative">
//                 <Link href={`/products/${encodeURIComponent(image.title.toLowerCase().replace(/ /g, '-'))}`}>
//                   <Image 
//                     alt={image.alt} 
//                     className="object-cover object-center h-full w-full transition-transform duration-300 group-hover:scale-105" 
//                     src={image.src} 
//                     width={500} // Adjust width as needed
//                     height={400} // Adjust height as needed
//                   />
//                 </Link>
//               </div>

//               <div className="mt-5 space-y-2">
//                 <h2 className="text-xl font-medium title-font text-gray-900">
//                   {image.title}
//                 </h2>
//                 <p className="text-lg font-semibold text-gray-800">
//                   {image.price}
//                 </p>
//               </div>

//               <div className="absolute bottom-2 right-2 text-black p-2 rounded-full">
//         <Link
//           href="/productdetails"
//           className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-300 transition"
//         >
//           <FiShoppingCart />
//         </Link>
//       </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Featured;


'use client'

import Link from 'next/link';
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import Image from 'next/image'; // Import Image from Next.js

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
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-bold title-font text-3xl mb-2 sm:mb-0">
              FEATURED PRODUCTS
            </h1>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {images.map((image, index) => (
            <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6 relative group">
              <div className="rounded-lg h-64 overflow-hidden relative">
                <Link href={`/products/${encodeURIComponent(image.title.toLowerCase().replace(/ /g, '-'))}`}>
                  <Image 
                    alt={image.alt} 
                    className="object-cover object-center h-full w-full transition-transform duration-300 group-hover:scale-105" 
                    src={image.src} 
                    width={500} // Adjust width as needed
                    height={400} // Adjust height as needed
                  />
                </Link>
              </div>

              <div className="mt-5 space-y-2">
                <h2 className="text-xl font-medium title-font text-gray-900">
                  {image.title}
                </h2>
                <p className="text-lg font-semibold text-gray-800">
                  {image.price}
                </p>
              </div>

              <div className="absolute bottom-2 right-2 text-black p-2 rounded-full">
                <Link
                  href="/productdetails"
                  className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-300 transition"
                >
                  <FiShoppingCart />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
