import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "antd/dist/antd.css";
import "./styles/css/style.css";
import Store from "./Components/Store";
import ProductContextProvider from "./Context/ProductContextProvider";
import ProductDetils from "./Components/ProductDetils";
import NotFound from "./Components/NotFound";
import CartContextProvider from "./Context/CartContextProvider";
import NavBar from './Components/NavBar';
import Shoping from './Components/Shoping';

const App = () => {
  return (
    <ProductContextProvider >
      <CartContextProvider>
      <NavBar/>
        <Routes>
          <Route path="/products/:id" element={<ProductDetils />} />
          <Route path="/products/" element={<Store />} />
          <Route path="/" element={<Store />} />
          <Route path="/Shoping" element={<Shoping/>}/>
          <Route path="/notfound/" element={<NotFound />} />
          <Route path="/*" element={<Navigate replace to="/notfound" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
};

export default App;
