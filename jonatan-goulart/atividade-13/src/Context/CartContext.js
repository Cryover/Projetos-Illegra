import React from "react";

export const CartContext = React.createContext({});

export const CartProvider = (props) => {
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};
