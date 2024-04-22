import "./App.css";
import React from "react";
import Header from "./components/Layout/Header";
import Colors from "./components/Colors/Colors";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import { useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const cartShow = () => {
    setModalShow(true);
  };
  const cartHide = () => {
    setModalShow(false);
  };
  return (
    <CartProvider>
      <Header OnShow={cartShow} />
      <Colors />
      {modalShow && <Cart OnHide={cartHide} show={modalShow} />}
    </CartProvider>
  );
}
export default App;
