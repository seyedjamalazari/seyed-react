import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { shorten } from "../shared/Function";
import { ProductsContext } from "./../Context/ProductContextProvider";

const ProductDetils = () => {
  const data = useContext(ProductsContext);
  console.log(data);
  let params = useParams();

  if (data.length === 0) {
    return <div>loading</div>;
  }

  const product = data[params.id - 1];
  const { image, title } = product;

  return (
    <div>
      <img src={image} alt="product" style={{ width: "30px" }} />
      <h3>App{params.id}</h3>
      <h2>{shorten(title)}</h2>
      <Link to={`/products/`}>back</Link>
    </div>
  );
};

export default ProductDetils;
