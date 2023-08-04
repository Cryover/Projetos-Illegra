import { FadeInLeftNav, Ul, Li, Img, A } from "../style/Styled";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FadeInLeftNav>
      <Img
        logo="true"
        src="/img/JL-logo.png"
        alt="Logo_Jal"
        drag
        dragConstraints={{ left: 10, right: 10, down: false, up: false }}
        dragMomentum={false}
      ></Img>
      <Ul ulNav>
        <Li>
          <A nava="true" href="#home" onClick={ScrollToTop}>
            Home
          </A>
        </Li>
        <Li>
          <A nava="true" href="#flights">
            Flights
          </A>
        </Li>
        <Li>
          <A nava="true" href="#contact">
            Contact
          </A>
        </Li>
      </Ul>
      <A fabar="true" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </A>
      <FadeInLeftNav
        mobilenav="true"
        layout
        style={{
          display: isOpen ? "flex" : "none",
          transition: "0.3s",
        }}
      >
        <Ul ulnavmobile>
          <Li>
            <A nava="true" href="#home" onClick={ScrollToTop}>
              Home
            </A>
          </Li>
          <Li>
            <A nava="true" href="#flights">
              Flights
            </A>
          </Li>
          <Li>
            <A nava="true" href="#contact">
              Contact
            </A>
          </Li>
        </Ul>
      </FadeInLeftNav>
    </FadeInLeftNav>
  );
}

export default NavBar;
