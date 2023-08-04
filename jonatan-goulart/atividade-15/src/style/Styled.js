import styled, { css, keyframes } from "styled-components";
import { bounce, fadeInLeft, fadeInDown } from "react-animations";
import { motion } from "framer-motion";

export const ProgressBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  height: 10px;
  background: #cc0000;
  transform-origin: 0%;
`;

export const H2 = styled.h2`
  padding-left: 20px;
  color: #fff;
`;

export const H3 = styled.h3`
  color: #fff;
  text-align: left;
  padding: 10px;
`;

export const MainContainer = styled.div`
  width: 80%;
  margin: auto;
  @media (max-width: 650px) {
    width: 100%;
    margin: 0px;
  }
`;

export const Button = styled(motion.button)`
  background-color: #fff;
  border-radius: 3px;
  border: 2px solid #2a344b;
  color: #2a344b;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: 100px;
  transition: 0.3s;

  &:hover {
    background-color: gray;
    transition: 0.3s;
  }

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};

  ${(props) =>
    props.up &&
    css`
      position: fixed;
      bottom: 10px;
      right: 10px;
      border-radius: 50%;
      border: 1px solid #282c34;
      background: #2a344b;
      width: 60px;
      height: 60px;
      color: white;
      z-index: 99999;

      @media (max-width: 850px) {
        height: 50px;
        width: 50px;
      }
    `};
  ${(props) =>
    props.contact &&
    css`
      border-radius: 15px;
    `};
`;

export const ImgAwards = styled(motion.img)`
  width: 100px;
  height: 100px;
`;

export const Img = styled(motion.img)`
  object-fit: fill;
  z-index: 2;

  ${(props) =>
    props.logo &&
    css`
      margin-left: 10px;
      border-radius: 5px;
      width: 300px;
      max-height: fit-content;
      height: 100%;
    `};
  ${(props) =>
    props.awards &&
    css`
      width: 100px;
      height: 100px;
    `};
`;

export const A = styled(motion.a)`
  position: relative;
  text-decoration: none;
  color: #383838;
  transition: 0.3s;

  ${(props) =>
    props.anotices &&
    css`
      color: white;
      position: static;
      &:hover {
        color: gold;
      }
    `};
  ${(props) =>
    props.aplusnotices &&
    css`
      color: #cc0000;
      align-self: flex-end;
      position: static;
    `};

  ${(props) =>
    props.nava &&
    css`
      &:after {
        content: "";
        position: absolute;
        background-color: #cc0000;
        height: 3px;
        width: 0px;
        left: 0px;
        bottom: -10px;
        transition: 0.3s;
      }
      &:hover:after {
        width: 100%;
      }
    `};

  ${(props) =>
    props.fabar &&
    css`
      animation: 1s ${fadeInLeftAnimation};
      display: none;
      @media (max-width: 650px) {
        display: flex;
        padding-right: 20px;
      }
    `};
  ${(props) =>
    props.afooter &&
    css`
      color: white;
      transition: 0.3s;

      &:hover {
        transition: 0.3s;
        color: gold;
      }
    `};
`;

export const P = styled(motion.p)`
  padding: 20px;
  ${(props) => props.pfooter && css``};
`;

export const Section = styled.section`
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;

  ${(props) =>
    props.flights &&
    css`
      margin-top: -200px;
      border-radius: 10px 10px 0px 0px;
      background-color: white;
      height: fit-content;
      overflow: hidden;
    `};
  ${(props) =>
    props.awards &&
    css`
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 600px;
      border-radius: 0px;
      background-image: url("img/philosophy_img_rinen.png");
      
      @media (max-width: 1030px) {
        border-radius: 0px;
        padding: 0px;
        justify-content: flex-end;
        flex-direction: column;
        height: 700px;
      }

      @media (max-width: 760px) {
      
      }
  }
    `};
  ${(props) => props.notices && css``};
  ${(props) =>
    props.mileage &&
    css`
      background-image: url("img/JAL78721.jpg");
      background-attachment: fixed;
    `};
  ${(props) =>
    props.contact &&
    css`
      background-image: url("/img/pic005.jpg");
      background-repeat: no-repeat;

      @media (max-width: 650px) {
        background-image: none !important;
        background-color: #2a344b;
        height: 330px;
      }
    `};
`;

export const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border-radius: 0px 0px 0px 0px;
  background-color: #2a344b;
  width: 35%;
  height: 100%;
  border-radius: 0px;

  @media (max-width: 650px) {
    border-radius: 0px;
    align-items: center;
    width: 100%;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  transition: 0.3s;
  background: white;
  border-radius: 5px;
  border: 2px solid #2a344b;
  color: #2a344b;
  padding: 5px;
  width: 100%;
  height: 25px;

  &:focus {
    background-color: aliceblue;
    box-shadow: 0 0 10px 5px black;
    transition: 0.3s;
  }

  ${(props) =>
    props.contacts &&
    css`
      width: 100%;
    `};
`;

export const Footer = styled.footer`
  width: 100%;
  height: 200px;
  background-color: #383838;
  display: flex;
  align-items: center;

  @media (max-width: 470px) {
    height: 300px;
  }
`;

const bounceAnimation = keyframes`${bounce}`;
const fadeInLeftAnimation = keyframes`${fadeInLeft}`;
const fadeInDownAnimation = keyframes`${fadeInDown}`;

export const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

export const Div = styled.div`
  color: white;

  ${(props) =>
    props.backgroundDiv &&
    css`
      background-image: url("img/JAL78721.jpg");
      height: 700px;
      background-size: cover;
      background-attachment: fixed;
    `};

  ${(props) =>
    props.buttondiv &&
    css`
      text-align: center;
    `};

  ${(props) =>
    props.flight &&
    css`
      background-color: #2a344b;
      padding: 10px;
      height: 100%;
    `};

  ${(props) =>
    props.awardsDiv &&
    css`
      width: 40%;
      height: fit-content;
      text-align: center;

      @media (max-width: 1060px) {
        width: 100%;
        border-radius: 0px;
      }

      @media (max-width: 850px) {
        width: 100%;
      }
    `};

  ${(props) =>
    props.awardsTextDiv &&
    css`
      border-radius: 0px 0px 0px 10px;
      width: 60%;
      height: fit-content;
      background-color: #2a344b;
      font-size: small;
      text-align: justify;

      @media (max-width: 1060px) {
        width: 100%;
        border-radius: 0px;
        overflow: hidden;
      }

      @media (max-width: 850px) {
        height: fit-content;
        border-radius: 0px;
      }
    `};

  ${(props) =>
    props.footerDiv &&
    css`
      margin-left: 20px;
      width: 100%;
    `};
`;

export const Header = styled.header`
  font-size: 20px;
  position: fixed;
  width: 100%;
  height: 50px;
  top: 0px;
  margin-bottom: 10px;
  background-color: #fff;
`;

export const FadeInLeftNav = styled(motion.nav)`
  animation: 1s ${fadeInDownAnimation};
  display: flex;
  align-items: center;
  height: 100%;
  z-index: 99;
  background-color: #fff;

  @media (max-width: 650px) {
    justify-content: space-between;
  }

  ${(props) =>
    props.mobilenav &&
    css`
      animation: 1s ${fadeInLeftAnimation};
      position: fixed;
      transition: 0.3s;
      top: 0px;
      left: 0px;
      width: 100%;
      margin-top: 60px;
      height: 120px;
    `};
`;

export const Ul = styled.ul`
  display: flex;
  list-style-type: none;

  ${(props) =>
    props.ulNav &&
    css`
      gap: 40px;
      @media (max-width: 650px) {
        display: none;
      }
    `};

  ${(props) =>
    props.ulNotices &&
    css`
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 5px;
      @media (max-width: 620px) {
        padding: 0px;
      }
    `};

  ${(props) =>
    props.ulnavmobile &&
    css`
      flex-direction: column;
      transition: 0.3s;
      gap: 7px;
      padding-left: 15px;
      @media (min-width: 650px) {
        display: none;
        transition: 0.3s;
      }
    `};

  ${(props) =>
    props.ulfooter &&
    css`
      padding: 0px;
      flex-direction: column;
      gap: 10px;
    `};
`;

export const Li = styled(motion.li)`
  margin: 0px;
  padding: 0px;

  ${(props) =>
    props.linotices &&
    css`
      display: flex;
      gap: 10px;
    `};
  ${(props) =>
    props.linoticesfirst &&
    css`
      display: flex;
      gap: 10px;
      justify-content: flex-start;
    `};
`;

export const FadeInDownImg = styled.img`
  animation: 1s ${fadeInDownAnimation};
`;
