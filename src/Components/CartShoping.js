import React from "react";
import { useContext } from "react";
import { CartContexts } from "../Context/CartContextProvider";
import { shorten } from "../shared/Function";
import {
  PlusCircleOutlined,
  DeleteOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";

const CartShoping = ({ data }) => {
  const { state, dispatch } = useContext(CartContexts);
  const { image, title, price, quantity } = data;

  return (
   
      <div className="cart-Shoping carte">
        <img src={image} className="image" />
        <h3>{shorten(title)}</h3>
        <div className={"ispan"}>{quantity}</div>
        <div>${price}</div>
        <div>sumPrice${quantity * price}</div>

        <div>
          {
            <button
              onClick={() => dispatch({ type: "In-Crease", payload: data })}
            >
              {" "}
              <PlusCircleOutlined className={"icon"} />
            </button>
          }

          {quantity > 1 ? (
            <button
              onClick={() => dispatch({ type: "De-Crease", payload: data })}
            >
              <MinusCircleOutlined className={"icon"} />
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: "Remove-Item", payload: data })}
            >
              <DeleteOutlined className={"icon"} />
            </button>
          )}
        </div>
      </div>
   
  );
};

export default CartShoping;
