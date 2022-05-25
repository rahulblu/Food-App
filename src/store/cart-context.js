import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: {},
  addFromCart: {},
  removeItem: {},
});

export default CartContext;
