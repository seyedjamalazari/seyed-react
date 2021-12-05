import React, { useContext } from "react";
import { ProductsContext } from "./../Context/ProductContextProvider";
import Product from "./Product";

const Store = () => {
  const products = useContext(ProductsContext);
  console.log(products);
  return (
    <div>
    
      {products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
