import React from 'react';
import { useContext } from 'react';
import { CartContexts } from '../Context/CartContextProvider';
import CartShoping from './CartShoping';
import { Link } from 'react-router-dom';
import ClearShoping from './ClearShoping';



const Shoping = () => {
    const{state}=useContext(CartContexts);
    return (
        <>
        <div className={"store"}>
           {state.selectedItems.map(item=><CartShoping key={item.id}data={item}/>)}
        </div>
        <ClearShoping/>
      
       </>
    );
};

export default Shoping;