import React from "react";
import { Route, Routes ,Navigate} from "react-router-dom";

import Store from "./Components/Store";
import ProductContextProvider from "./Context/ProductContextProvider";
import ProductDetils from "./Components/ProductDetils";
import NotFound from './Components/NotFound';

const App = () => {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path="/products/:id" element={<ProductDetils />} />  
        <Route path="/products/" element={<Store />} />        
        <Route path="/notfound/" element={<NotFound/>} />        
        <Route  path ="/*" element={ <Navigate replace to="/notfound" />} />
        
      </Routes>
    </ProductContextProvider>
  );
};

export default App;
