// ProductCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import { FiShoppingCart } from 'react-icons/fi';

interface ProductCardProps {
  src: string;
  alt: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ src, alt, title, price }) => {
  return (
    <div className="p-4 md:w-1/3 sm:mb-0 mb-6 relative">
      <div className="rounded-lg h-64 overflow-hidden relative">
        {/* Wrap the image with a Link component */}
        <Link href={`/product/${title}`} passHref>
          <Image
            alt={alt}
            className="object-cover object-center h-full w-full cursor-pointer"
            src={src}
            width={500} // Adjust width as per your needs
            height={400} // Adjust height as per your needs
          />
        </Link>
      </div>

      {/* Product Title */}
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5">{title}</h2>

      {/* Price */}
      <p className="text-lg text-gray-800 mt-2">{price}</p>

      {/* Cart Icon - Bottom Center */}
      <div className="absolute bottom-2 right-2 text-black p-2 rounded-full">
        <Link
          href="/productdetails"
          className="flex items-center gap-2 px-4 py-2 border rounded hover:bg-gray-300 transition"
        >
          <FiShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
