import React from 'react';
import { useContext,useState } from 'react';
import { CartContexts } from '../Context/CartContextProvider';
import { Link} from "react-router-dom";
import {ShoppingCartOutlined } from "@ant-design/icons";
// import Slide from './Slide';

  
const NavBar = () => {
    const {state}=useContext(CartContexts);


    return (
      
        <div className="navbar">        
<span className={"Shoping"}><ShoppingCartOutlined  className={"icon"}/>{state.itemsConter}</span>
<Link to={`/Shoping`}className={"Shoping"}>shop</Link>
<Link to={`/SignUp`}className={"Shoping"}>SignUp</Link>
{/* <Slide/> */}
{/* <div> 
     <form>
         <lable>Menu</lable>
         <select>
             <option to={`/SignUp`}>SignUp</option>
             {/* <option valu="SignUp"><Link to={`/SignUp`}className={"Shoping"}>SignUp</Link></option> */}
         {/* </select>
  </form></div> */} 
 </div> 

    );
}; 

export default NavBar;