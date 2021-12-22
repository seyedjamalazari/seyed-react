import React from 'react';
import { useContext } from 'react';
import { CartContexts } from '../Context/CartContextProvider';
import { Link} from "react-router-dom";


  
const NavBar = () => {
    const {state}=useContext(CartContexts);
    return (
        <div className={"navbar"}>
        
    

<button>{ state.itemsConter}</button>
<Link to={`/Shoping`}>shop</Link>
<Link to={`/SignUp`}>SignUp</Link>




     </div>
    );
};

export default NavBar;