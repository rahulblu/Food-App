import React, { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import ContextProvider from "./store/ContextProvider";

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const showCartHandler = () => {
    setCartVisible(true);
  };
  const hideCartHandler = () => {
    setCartVisible(false);
  };

  return (
    <ContextProvider>
      {cartVisible && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </ContextProvider>
  );
}

export default App;
