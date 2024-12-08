
import Hero from "./components/Hero";
import Slider from "./components/Slider";

import Catagory from "./components/Catagory";
import Explor from "./components/Explor";
import Featured from "./components/Featured";
import OurProducts from "./components/OurProducts";

export default function Home() {
  return (
    <div >
      <Hero/>
      <Slider/>
      <Featured />
      <Catagory />
      <Explor />
      <OurProducts />
    </div>
  );
}
