import styled from "styled-components";

export const DivApp = styled.div`
  margin: auto;
  width: 90%;
`;

export const DivProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DivProduct = styled.div`
  width: 20%;
  padding: 10px;
`;

export const DivCheckout = styled.div`
  background-color: blueviolet;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 65px;
  right: 0px;
  border: 2px solid blueviolet;
  border-radius: 10px 0px 0px 10px;
  width: 15%;
  min-width: 150px;
  max-height: 600px;
  align-items: center;
  text-align: center;
  overflow-y: auto;
`;

export const ImgBasket = styled.img`
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: 60px;
  height: 60px;
`;

export const Button = styled.button`
  color: blueviolet;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid blueviolet;
  border-radius: 3px;
`;

export const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const NavbarTheme = styled.nav`
  background-color: blueviolet;
  background-image: url("/img/fruit_background.webp");
  background-repeat: no-repeat;
  background-size: cover;
  backdrop-filter: blur(20px);
  box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export const Header = styled.header`
  background-color: blueviolet;
`;

export const H1 = styled.h1``;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-between;
`;

export const UlCartList = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0px;
  padding-left: 0px;
`;

export const Li = styled.li`
  list-style: none;
`;

export const LiCheckout = styled.li`
  list-style: none;
`;

export const a = styled.a`
  text-decoration: none;
`;
