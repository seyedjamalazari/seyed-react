import React from 'react';
import { useContext,useState } from 'react';
import { CartContexts } from '../Context/CartContextProvider';
import { Link} from "react-router-dom";
import {ShoppingCartOutlined } from "@ant-design/icons";

  
const NavBar = () => {
    const {state}=useContext(CartContexts);
    const{style,setStyle}=useState("hamburge");

const changStyle=()=>{
    setStyle("ulNavBarSm");
    

}
    return (
        <div className={"navbar"}>
        {/* <button onClick={changStyle} >
        <BorderInnerOutlined />     
        </button> */}
     {/* <div className={"style.navbar"}> */}
<span className={"Shoping"}><ShoppingCartOutlined  className={"icon"}/>{state.itemsConter}</span>
<Link to={`/Shoping`}className={"Shoping"}>shop</Link>
<Link to={`/SignUp`}className={"Shoping"}>SignUp</Link>
 {/* </div> */}
{/* <ul className={'ulNavBarSm'}>
<li>sum buy{state.itemsConter}</li>
<li><Link to={`/Shoping`}>shop</Link>
</li>
<li><Link to={`/SignUp`}>SignUp</Link></li>
</ul> */}
     </div>
    );
}; 

export default NavBar;