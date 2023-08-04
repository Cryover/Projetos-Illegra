import "./App.css";
import Navbar from "./components/NavBar";
import FooterDiv from "./components/Footer";
import Form from "./components/Form";
import { Flights } from "./components/Flights";
import { CircleIndicator } from "./components/CircleIndicator";
import {
  Header,
  MainContainer,
  Button,
  Section,
  Div,
  P,
  H2,
  ImgAwards,
} from "./style/Styled";

function App() {
  const ScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header>
        <Navbar />
        <CircleIndicator />
      </Header>
      <Div backgroundDiv></Div>
      <MainContainer>
        <Section flights id="flights" className="Flights">
          <Flights />
        </Section>
        <Section awards id="awards" className="Awards">
          <Div awardsDiv>
            <ImgAwards
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src="img/logo_APEX-World-Class.png"
              alt="Logo Apex World Class"
            ></ImgAwards>
            <ImgAwards
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src="img/diamond.png"
              alt="Logo Apex Health Safety Diamond"
            ></ImgAwards>
            <ImgAwards
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              src="img/skytrax_logo.png"
              alt="SkyTrax Safety Rating Logo"
            ></ImgAwards>
          </Div>
          <Div awardsTextDiv>
            <H2>Committed to the Highest Standards of Service </H2>
            <P initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
              JAL is committed to providing service that meets our customers'
              highest expectations. With safety as our number one priority, we
              strive to deliver the best in comfort, convenience, and on-time
              performance so that customers can enjoy a satisfying, worry-free
              travel experience.
            </P>
          </Div>
        </Section>
        <Section contact id="contact" className="Contact">
          <Form />
        </Section>
        <Button
          up="true"
          whileTap={{ scale: 0.9 }}
          drag
          dragConstraints={{ left: 0, right: 8000, down: 0, up: 8000 }}
          dragSnapToOrigin={true}
          className="ButtonUp"
          onClick={ScrollToTop}
        >
          UP
        </Button>
      </MainContainer>
      <FooterDiv />
    </div>
  );
}

export default App;
