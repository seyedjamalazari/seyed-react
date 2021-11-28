
import React from 'react';
import Store from './Components/Store';
import ProductContextProvider from './Context/ProductContextProvider';

const App = () => {
  return (
    <ProductContextProvider>
<Store/>
    </ProductContextProvider>
  
  );
};

export default App;



