import React from 'react';

const Product = ({productData}) => {
    return (
        <div>
            <h3>{productData.title}</h3>
        </div>
    );
};

export default Product;