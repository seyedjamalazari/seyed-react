import React from 'react';
import { useContext } from 'react';
import { CartContexts } from '../Context/CartContextProvider';
import { Link} from "react-router-dom";


  
const NavBar = () => {
    const {state}=useContext(CartContexts);
    return (
        <div className={"navbar"}>
        
    

<div  className={"Shopsing"}><button>{ state.itemsConter}</button>sum buy</div>
<div className={"Shopsing"}><Link to={`/Shoping`}>shop</Link></div>
<div className={"Shopsing"}><Link to={`/SignUp`}>SignUp</Link></div>





     </div>
    );
};

export default NavBar;