import React from "react";
import Carousel from "../components/Carousel";
import ShopBy from "../components/ShopBy";
import GenInfo, { Brands } from "../components/GenInfo";

const data = [
  { src: "/GenInfo/adidas.jpg", name: "Adidas", to: "/search/adidas" },
  { src: "/GenInfo/nike.png", name: "Nike", to: "/search/nike" },
  { src: "/GenInfo/skechers.jpg", name: "Skechers", to: "/search/skechers" },
  { src: "/GenInfo/puma.jpg", name: "Puma", to: "/search/puma" },
];

const Home = () => {
  return (
    <div className="max-w-screen-xl xs:w-[95vw] xs:max-w-[95vw] md:w-full mx-auto ">
      <Carousel />
      <GenInfo />
      <Brands data={data} />
      <div className="md:w-full md:max-w-full xs:mx-2  sm:mx-auto ">
        <div className="child:ring-white">
          <ShopBy title="Best Sellers" filter="bestSellers" mocData={data} />
        </div>
        <div className="child:ring-white">
          <ShopBy title="Top Rated" filter="topRated" />
        </div>
      </div>
    </div>
  );
};

export default Home;
