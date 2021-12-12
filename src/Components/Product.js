import React from "react";
import { Link } from "react-router-dom";
import { isIncart, quantityCount, shorten } from "../shared/Function";
import { useContext } from "react";
import { CartContexts } from "../Context/CartContextProvider";
import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContexts);

  return (
    <div className={"Product"}>
      <img src={productData.image} alt="product" className={"imgproduct"} />
      <h2>{productData.id}</h2>
      <h3>{shorten(productData.title)}</h3>
      <Link to={`/products/${productData.id}`}>ditails</Link>
      <div>
        {isIncart(state, productData.id) ? (
          <button
            onClick={() =>
              dispatch({ type: "In-Crease", payload: productData })
            }
          >
            <PlusCircleOutlined className={"icon"} />
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "Add-Item", payload: productData })}
          >
            
            Add tocart
          </button>
        )}
        {  quantityCount(state,productData.id)>1 &&<button onClick={()=>dispatch({type:"De-Crease",payload:productData})}>- </button>         
        }
        {    quantityCount(state,productData.id)===1 &&<button onClick={()=>dispatch({type:"Remove-Item",payload:productData})}><DeleteOutlined className={"icon"} /></button>         
        }

      </div>
    </div>
  );
};

export default Product;
