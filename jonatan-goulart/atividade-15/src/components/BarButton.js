import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Ul, Li, A } from "../style/Styled";
import { FadeInLeftNav } from "../style/Styled";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export const BarButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FadeInLeftNav animate={isOpen ? "open" : "closed"} variants={variants}>
      <FaBars onClick={() => setIsOpen((isOpen) => !isOpen)} />
      <Ul>
        <Li>
          <A href="#home" onClick={ScrollToTop}>
            Home
          </A>
        </Li>
        <Li>
          <A href="#abouts">About</A>
        </Li>
        <Li>
          <A href="#fLights">FLights</A>
        </Li>
        <Li>
          <A href="#mileage">Mileage</A>
        </Li>
        <Li>
          <A href="#contact">Contact</A>
        </Li>
      </Ul>
    </FadeInLeftNav>
  );
};
