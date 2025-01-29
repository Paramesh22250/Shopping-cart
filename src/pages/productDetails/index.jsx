import React, { useContext, useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";
import { ShoppingContext } from "../../context";

export const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { productDetails, setProductDetails, setLoading, loading, handleAddToCart } =
    useContext(ShoppingContext);
 
  async function fetchProductDetails() {
    setLoading(true)
    const apires = await fetch(`https://dummyjson.com/products/${id}`);
    const res = await apires.json();
    if (res) {
      setProductDetails(res);
      setLoading(false);
    }
  }

  
  // console.log(productDetails);

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <h1>Loading Product Details!!</h1>;
  }
  return (
    <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
      <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6">
        <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
          <div className="px-4 py-10 rounded-xl shadow-lg relative">
            <img
              src={productDetails?.thumbnail}
              alt={productDetails?.title}
              className="w-full rounded object-cover"
            />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
            {productDetails?.images?.length
              ? productDetails?.images.map((imgItem) => (
                  <div className="rounded-xl p-4 shadow-md" key={imgItem}>
                    <img
                      src={imgItem}
                      alt="productItems"
                      className="w-24 cursor-pointer"
                    />
                  </div>
                ))
              : null}
          </div>
        </div>
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-extrabold text-slate-800">
            {productDetails?.title}
          </h2>
          <div className="flex flex-wrap gap-4 mt-4">
            <p className="text-xl font-bold">${productDetails?.price}</p>
          </div>
          <dir>
            <button onClick={()=>handleAddToCart(productDetails)} className="mt-5 min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold rounded">Add to Cart</button>
          </dir>
        </div>
      </div>
    </div>
  );
};
