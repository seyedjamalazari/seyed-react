import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "./../Context/ProductContextProvider";
import NavBar from "./NavBar";

const ProductDetils = () => {
  const data = useContext(ProductsContext);
 
  let params = useParams();

  if (data.length === 0) {
    return <div>loading</div>;
  }

  const product = data[params.id - 1];
  const { image, title ,price} = product;

  return (
    <>
    <NavBar/>
    <div className={"store"}>
    <div className={"products-details"}>
   
      <img src={image} alt="product" className={"image"} />
      <h3>App{params.id}</h3>
      <h2>{title}</h2>
      <h3>{price}</h3>
      <Link to={`/products/`}>go to shopping</Link>
    </div> 
   </div></>
  );
};

export default ProductDetils;
