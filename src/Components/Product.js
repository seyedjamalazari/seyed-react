import React from 'react';
import { Link } from 'react-router-dom';
import { shorten } from '../shared/Function';

const Product = ({productData}) => {


    
    return (
        <div>
            <h2>{productData.id}</h2>
            <h3>{shorten(productData.title)}</h3>
            <Link to={`/products/${productData.id}`}>ditails</Link>
           
        </div>
    );
};

export default Product;