import axios from "axios";
import React, { useEffect, useState } from "react";
import HorSlider from "./HorSlider";
import BrandsProductCard from "./BrandsProductCard";

const ShopBy = ({ filter, title, mocData }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/filter/${filter}`,
        );
        if (isMounted) {
          setProducts(res.data);
          setLoading(false);
        }
      } catch (err) {
        if (isMounted) {
          console.error(`Error while fetching products: ${err.message}`);
          setError(err);
          setLoading(false);
        }
      }
    };

    if (mocData) {
      setProducts(mocData);
      setLoading(false);
      return;
    }
    fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div className="mt-10 mb-2 text-2xl">{title}</div>
      <div className="overflow-x-auto overflow-y-hidden md:max-w-full scroll-container mb-10 mx-auto relative scroll-container">
        {loading && <p>Loading...</p>}
        {error && <p>Error while fetching: {error.message}</p>}

        {mocData ? (
          <div className="flex flex-wrap justify-center">
            {mocData.map((elem, id) => (
              <BrandsProductCard elem={elem} key={id} />
            ))}
          </div>
        ) : (
          <div className="flex flex-nowrap space-x-4">
            {/* Ensure products is always an array */}
            {(Array.isArray(products) ? products : []).map((elem) => (
              <HorSlider
                product={elem}
                key={elem._id || elem.id} // fallback if _id is missing
                className="inline-block"
                home={true}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default ShopBy;
