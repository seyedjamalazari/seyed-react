import React from "react";
import { useContext } from "react";
import { CartContexts } from "../Context/CartContextProvider";
import { Link } from "react-router-dom";

const ClearShoping = () => {
  const { state, dispatch } = useContext(CartContexts);


  return (
    <div className="clearShoping">
      <div className="total">
        
        <div className="clearShopingDiv">quantity:  {state.itemsConter}</div>        
        <div className="clearShopingDiv">total:{state.total}$</div>
       
      </div>
      {
        <div className="check">
          <button className="clearShopingbut" onClick={() => dispatch({ type: "Check-Out" })}>
            check-out
          </button>
          <button className="clearShopingbut"  onClick={() => dispatch({ type: "Clear" })}>clear</button>
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
          <div> <Link to="/products/">back to shop</Link></div>
        </div>
      )}
    </div>
  );
};

export default ClearShoping;
