import React, { useContext } from "react";
// import { Input, Button } from "antd";
// import {FastBackwardOutlined} from "@ant-design/icons";
import { ProductsContext } from "./../Context/ProductContextProvider";
import Product from "./Product";

const Store = () => {
  const products = useContext(ProductsContext);
 
  return (
    <div className={"storestyle"}>
      {/* <Input />
      <Button type="primary">Hi</Button>
      <FastBackwardOutlined  style={{width:"300px",height:"20px" }}/> */}
     {      products.map((product) => (
        <Product key={product.id} productData={product} />
      ))}
    </div>
  );
};

export default Store;
