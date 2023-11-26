import React from "react";
import { Routes,Route, Navigate } from "react-router-dom";
import Store from "./components/Store";
import Detail from "./components/Detail";
import ShopCart from "./components/ShopCart";
import Navbar from "./components/shared/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <>
    <Provider store={store}>
    <Navbar />
    <Routes>
      <Route path="/products" element={<Store />}/>
      <Route path="/products/:id" element={<Detail />} />
      <Route path="/cart" element={<ShopCart />} />
      <Route path ="/*" element = {<Navigate to="/products" />} />
    </Routes>
    </Provider>
    </>
  );
}

export default App;
