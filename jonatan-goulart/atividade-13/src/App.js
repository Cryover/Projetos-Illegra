import { CartContext } from "./Context/CartContext";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartButton from "./components/CartButton";
import { useState } from "react";
import { DivApp } from "./style/Styles";

function App() {
  const [cartList, setCartList] = useState([]);

  return (
    <DivApp>
      <CartContext.Provider value={{ cartList, setCartList }}>
        <Navbar />
        <ProductList />
        <CartButton />
      </CartContext.Provider>
    </DivApp>
  );
}

export default App;
