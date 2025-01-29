import React, { useContext } from "react";
import { ShoppingContext } from "../../context";
import { ProductItem } from "../../components/productItem";

export const ProductList = () => {
  const { products,loading } = useContext(ShoppingContext);
  if(loading) return(
    <h1>Loading products... Please Wait!!</h1>
  )
  // console.log(products)
  return (
    <>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-md mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-center">
              Featured Products
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-5 mt-10 lg:mt-16 lg:gap-8 lg:grid-cols-4">
            {products && products.length > 0 ? 
              products.map((singleItem) => {
                return <li key={singleItem.id} className="list-none"><ProductItem singleItem={singleItem}/></li>
              })
            : 
              <h3>No products found</h3>
            }
          </div>
        </div>
      </section>
    </>
  );
};
