import React from "react";
import { useNavigate } from "react-router-dom";
import BrandsProductCard from "./BrandsProductCard";

const GenInfo = () => {
  const data = [
    {
      src: "/GenInfo/free-shipping.png",
      title: "Free Shipping",
      text: "On all orders",
    },
    {
      src: "/GenInfo/coins.png",
      title: "Payment Options",
      text: "COD, cards, mobile payments",
    },
    {
      src: "/GenInfo/product-return.png",
      title: "Free Returns",
      text: "Refunds within 7 days",
    },
    {
      src: "/GenInfo/support.png",
      title: "24/7 Support",
      text: "Always here to help",
    },
  ];

  return (
    <div className="flex justify-center items-center my-20">
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-screen-lg">
        {data.map((elem, id) => (
          <li className="flex flex-col items-center bg-white p-4" key={id}>
            <div className="flex-shrink-0 mb-2">
              <img
                src={elem.src}
                alt={elem.title}
                className="h-16 w-16  rounded-full bg-slate-200"
              />
            </div>
            <div className="text-center">
              <p className="text-sm uppercase font-semibold">{elem.title}</p>
              <p className="text-xs text-gray-500">{elem.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenInfo;

export const Brands = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center my-16 w-full">
      <p className="child:ring-white font-bold mb-6">Top Brands</p>
      <div className="flex flex-wrap justify-center">
        {data.map((elem, id) => (
          <BrandsProductCard elem={elem} key={id} />
        ))}
      </div>
    </div>
  );
};
