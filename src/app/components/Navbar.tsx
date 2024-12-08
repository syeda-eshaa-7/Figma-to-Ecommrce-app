// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import LoadingBar from "react-top-loading-bar";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import { FiShoppingCart } from "react-icons/fi";

// const Navbar = () => {
//   const [progress, setProgress] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle
//   const pathname = usePathname();

//   useEffect(() => {
//     setProgress(20);
//     const timer1 = setTimeout(() => setProgress(40), 100);
//     const timer2 = setTimeout(() => setProgress(100), 400);

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//     };
//   }, [pathname]);

//   return (
//     <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
//       <LoadingBar
//         color="#933ce6"
//         progress={progress}
//         onLoaderFinished={() => setProgress(0)}
//       />
//       <div className="container mx-auto flex justify-between items-center ">
//         <Link href={"/"} className="flex items-center gap-2">
//           <Image src={"/Logo Icon.png"} alt="logo" height={60} width={60} />
//           <h1 className="text-3xl font-extrabold">Comforty</h1>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-4 items-center">
//           <div className="flex items-center gap-2">
//             <button className="px-4 py-2 border rounded hover:bg-gray-200 transition">
//               <div className="flex gap-3 iem-center">
//                 {" "}
//                 <FiShoppingCart />
//                 <Link href={"/cart"}> Cart</Link>
//               </div>
//             </button>
//             <button className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition">
//               Signup
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <div className="md:hidden flex items-center">
//           <button
//             className="ml-2 text-xl"
//             onClick={() => setMenuOpen(!menuOpen)}
//             aria-label="Toggle menu"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16m-7 6h7"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import LoadingBar from "react-top-loading-bar";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    setProgress(20);
    const timer1 = setTimeout(() => setProgress(40), 100);
    const timer2 = setTimeout(() => setProgress(100), 400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [pathname]);

  return (
    <nav className="p-4 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <LoadingBar
        color="#933ce6"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Title */}
        <Link href={"/"} className="flex items-center ml-[123px] gap-2">
          <Image src={"/Logo Icon.png"} alt="logo" height={40} width={40} />
          <h1 className="text-3xl font-extrabold">Comforty</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href="/cart"
            className="flex  mr-[130px] items-center gap-2 px-4 py-2 border rounded hover:bg-gray-200 transition"
          >
            <FiShoppingCart />
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
