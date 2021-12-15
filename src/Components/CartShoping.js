import React from 'react';
import { useContext } from 'react';
import { CartContexts } from '../Context/CartContextProvider';


const CartShoping = ({data}) => {
    const {dispatch}=useContext(CartContexts);
    const {image,title,price,quantity}=data
   
    return (
    
        <div className={"storestyle"}>
            <img src={image} style={{width:"30px"}}/>
            <h3>{title}</h3>

         <span>{quantity}</span>
               <div>{quantity>1?
                  
                  <button onClick={()=>dispatch({type:"De-Crease",payload:data})}>-</button>  :
                  <button onClick={()=>dispatch({type:"Remove-Item",payload:data})}>remove</button>  
                }
                {
                 <button onClick={()=>dispatch({type:"In-Crease",payload:data})}>+</button>   
                }
            </div>
       
          
           
        </div> 
    );
};

export default CartShoping;