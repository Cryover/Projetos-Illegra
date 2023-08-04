import React, { useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Button, Img, DivProductList, DivProduct } from "../style/Styles";

const ProductList = () => {
  const { cartList, setCartList } = React.useContext(CartContext);
  const [products] = useState([
    {
      name: "Banana",
      id: 1,
      price: 2.99,
      quantity: 10,
      img: "/img/Banana-Nanica.jpg",
    },
    {
      name: "Apple",
      id: 2,
      price: 1.99,
      quantity: 10,
      img: "/img/apple.jpg",
    },
    {
      name: "Orange",
      id: 3,
      price: 3.99,
      quantity: 10,
      img: "/img/orange.jpg",
    },
    {
      name: "Grapes",
      id: 4,
      price: 4.99,
      quantity: 10,
      img: "/img/grape.jpg",
    },
    {
      name: "WaterMelon",
      id: 5,
      price: 6.99,
      quantity: 10,
      img: "https://www.collinsdictionary.com/images/full/watermelon_222700726.jpg",
    },
    {
      name: "Melon",
      id: 6,
      price: 4.49,
      quantity: 10,
      img: "https://www.collinsdictionary.com/images/full/melon_306772649.jpg",
    },
    {
      name: "Strawberry",
      id: 7,
      price: 5.54,
      quantity: 10,
      img: "https://www.collinsdictionary.com/images/full/strawberry_227472010_1000.jpg",
    },
    {
      name: "Blueberry",
      id: 8,
      price: 6.69,
      quantity: 10,
      img: "https://images.squarespace-cdn.com/content/v1/5b8edfa12714e508f756f481/1538598121644-P3XKXM9Y3QHNIEPQ56JU/blueberry.jpg",
    },
  ]);

  function AddToCart(product) {
    let newCartList = [...cartList];
    newCartList.push(product);
    setCartList(newCartList);
  }

  return (
    <DivProductList>
      {products.map((product) => {
        return (
          <DivProduct key={product.id}>
            <Img src={product.img} alt={product.name}></Img>
            <h4>{product.name}</h4>
            <h5>R$ &nbsp; {product.price}</h5>
            <Button onClick={() => AddToCart(product)}>Add to Cart</Button>
          </DivProduct>
        );
      })}
    </DivProductList>
  );
};

export default ProductList;
