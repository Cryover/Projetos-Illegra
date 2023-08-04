import React, { useRef } from "react";
import { CartContext } from "../Context/CartContext";
import {
  ImgBasket,
  DivCheckout,
  UlCartList,
  Li,
  Button,
} from "../style/Styles";

const Navbar = () => {
  const { cartList, setCartList } = React.useContext(CartContext);
  const ref = useRef();
  const ToggleCartList = () => {
    ref.current.style.display === "none"
      ? (ref.current.style.display = "flex")
      : (ref.current.style.display = "none");
  };

  function TotalPrice() {
    let total = cartList.reduce((total, { price }) => total + price, 0);
    total = total.toFixed(2);
    return total;
  }

  function RemoveItemFromCart(index) {
    let newCartList = [...cartList];
    newCartList.splice(index, 1);
    setCartList(newCartList);
  }

  return (
    <div>
      <DivCheckout ref={ref}>
        <h3>
          Total: R$
          <TotalPrice />
        </h3>
        <UlCartList>
          {cartList.map((item, id) => {
            return (
              <Li key={id}>
                <h4>{item.name}</h4>
                <h5>R$ &nbsp; {item.price}</h5>
                <Button onClick={() => RemoveItemFromCart(id)}>Remove</Button>
              </Li>
            );
          })}
        </UlCartList>
      </DivCheckout>
      <ImgBasket
        src="https://cdn-icons-png.flaticon.com/512/181/181593.png"
        alt="basket_checkout"
        onClick={ToggleCartList}
      ></ImgBasket>
    </div>
  );
};

export default Navbar;
