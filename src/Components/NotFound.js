import React from 'react';
import {useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate=useNavigate();
    const clickHandler=()=>{
        navigate("/",{replace:true});
    }
    return (
        <div>
            <h1>Bas Esheyi</h1>
            <button onClick={clickHandler}>go to shop seyed</button>
           
        </div>              
    );
};

export default NotFound;