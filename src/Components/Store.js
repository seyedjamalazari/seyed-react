import React, { useContext } from "react";
import NavBar from "./NavBar"
import { ProductsContext } from "./../Context/ProductContextProvider";
import Product from "./Product";

const Store = () => {
  const products = useContext(ProductsContext);
 
  return (
    <>
    <NavBar/>
    <div className={"store"}>
    
     {      products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div></>
  );
};

export default Store;
