import React, { useContext } from "react";
import NavBar from "./NavBar"
import { ProductsContext } from "./../Context/ProductContextProvider";
import Product from "./Product";
import Footer from './Footer';
import Scroole from './Scroole';

const Store = () => {
  const products = useContext(ProductsContext);
 
  return (
    <>
    <NavBar/>
    <div className={"store"}>
      <Scroole/>
    
     {      products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default Store;
