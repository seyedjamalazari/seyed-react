import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Bas Esheyi</h1>
            <Link to={`/products/`}>Back to shop</Link>
        </div>
    );
};

export default NotFound;