import React from "react";
import { useContext } from "react";
import { CartContexts } from "../Context/CartContextProvider";
import { Link } from "react-router-dom";

const ClearShoping = () => {
  const { state, dispatch } = useContext(CartContexts);


  return (
    <div className={"clearShoping"}>
      <div className={"total"}>
        <h4>quantity:</h4>
        <span>{state.itemsConter}</span>
        <h4>total:$</h4>
        <span>{state.total}</span>
       
      </div>
      {
        <div>
          <button onClick={() => dispatch({ type: "Check-Out" })}>
            check-out
          </button>
          <button onClick={() => dispatch({ type: "Clear" })}>clear</button>
        </div>
      }
      {state.checkOut && (
        <div>
          <h3>check out sucsses fully</h3>
          <Link to="/products/">buy more</Link>
        </div>
      )}

      {!state.checkOut && state.itemsConter === 0 && (
        <div>
          <h3>want to buy?</h3>

          <Link to="/products">go</Link>
        </div>
      )}
    </div>
  );
};

export default ClearShoping;
