import React from "react";
import { NavbarTheme, Header, H1, Ul, Li } from "../style/Styles";

const Navbar = () => {
  return (
    <Header>
      <NavbarTheme>
        <H1>Fruit Market</H1>
        <Ul>
          <Li>Home</Li>
        </Ul>
      </NavbarTheme>
    </Header>
  );
};

export default Navbar;
