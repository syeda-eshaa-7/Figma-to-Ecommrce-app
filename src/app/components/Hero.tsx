// import React from 'react'
// import Image from 'next/image'

// const Hero = () => {
//   return (
//     <div className="flex justify-center items-start min-h-screen"> 
//       <div className="w-full lg:w-[1731px] h-[850px] bg-gray-300 relative flex items-center justify-between px-4 lg:px-16">
//         {/* Left Side Content */}
//         <div className="space-y-6 pl-0 lg:pl-16 ml-0 lg:ml-[123px] text-center lg:text-left">
//           <p className="text-3xl">WELCOME TO CHAIRY</p>
//           <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
//             Best Furniture <br />Collection For Your <br />Interior
//           </h1>
//           <button className="mt-6 inline-flex text-white bg-[#029FAE] border-0 py-4 px-12 text-xl focus:outline-none hover:bg-gray-300 rounded">
//             Subscribe
//           </button>
//         </div>

//         {/* Right Side Image */}
//         <div className="absolute top-[115px] right-[10px] lg:right-[140px] mr-4" style={{ width: '434px', height: '584px', opacity: '1' }}>
//           <Image
//             src="/Product Image.png" // Replace with your image path
//             alt="Hero Image"
//             width={434}
//             height={584}
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero


import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex justify-center items-start min-h-screen"> 
      <div className="w-full lg:w-[1731px] h-[850px] bg-gray-300 relative flex items-center justify-between px-4 lg:px-16">
        {/* Left Side Content */}
        <div className="space-y-6 pl-0 lg:pl-16 ml-0 lg:ml-[123px] text-center lg:text-left">
          <p className="text-3xl">WELCOME TO CHAIRY</p>
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Best Furniture <br />Collection For Your <br />Interior
          </h1>
          <button className="mt-6 inline-flex text-white bg-[#029FAE] border-0 py-4 px-12 text-xl focus:outline-none hover:bg-gray-300 rounded">
           <p> Shop Now --</p>
          </button>
        </div>

        {/* Right Side Image (hidden on smaller screens) */}
        <div className="absolute top-[115px] right-[10px] lg:right-[140px] mr-4 hidden lg:block">
          <Image
            src="/Product Image.png" // Replace with your image path
            alt="Hero Image"
            layout="intrinsic" // Maintains aspect ratio
            width={434}
            height={584}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
