import React from "react";
import { Route, Routes ,Navigate} from "react-router-dom";

import Store from "./Components/Store";
import ProductContextProvider from "./Context/ProductContextProvider";
import ProductDetils from "./Components/ProductDetils";
import NotFound from './Components/NotFound';
import CartContextProvider from "./Context/CartContextProvider";


const App = () => {
  return (
    <ProductContextProvider>
    <CartContextProvider>

   
      <Routes>
        <Route path="/products/:id" element={<ProductDetils />} />  
        <Route path="/products/" element={<Store />} /> 
        <Route path="/" element={<Store />} /> 

        <Route path="/notfound/" element={<NotFound/>} />        
        <Route  path ="/*" element={ <Navigate replace to="/notfound" />} />
        
      </Routes> 
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;
