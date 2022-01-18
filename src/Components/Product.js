import React from "react";
import { Link } from "react-router-dom";
import { isIncart, quantityCount, shorten } from "../shared/Function";
import { useContext } from "react";
import { CartContexts } from "../Context/CartContextProvider";
import { PlusCircleOutlined, DeleteOutlined,MinusCircleOutlined } from "@ant-design/icons";

const Product = ({ productData }) => {
  const { state, dispatch } = useContext(CartContexts);

  return (
    <div className={"products"}>
      
      <img src={productData.image} alt="product" className={"image"} />

      <h2>{productData.id}</h2>
      <h3>{shorten(productData.title)}</h3>
      <h4>{productData.price}</h4>
      <div className={"ditails"}>  <Link to={`/products/${productData.id}`}>ditails</Link></div>
    
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
          <button  className={"ditails"}
            onClick={() => dispatch({ type: "Add-Item", payload: productData })}
          >
            
            Add
          </button>
        )} {quantityCount(state,productData.id)>0 &&<span className={"icon ispan"}>{quantityCount(state,productData.id)}</span>}
        {  quantityCount(state,productData.id)>1 &&<button onClick={()=>dispatch({type:"De-Crease",payload:productData})}><MinusCircleOutlined   className={"icon"}/></button>         
}
    

        {    quantityCount(state,productData.id)===1 &&<button onClick={()=>dispatch({type:"Remove-Item",payload:productData})}><DeleteOutlined  className={"icon"}/></button>         
        }

      </div>
    </div>
  );
};

export default Product;
