import { Footer, Div, P, Ul, Li, A } from "../style/Styled";

function FooterDiv() {
  return (
    <Footer>
      <Div footerDiv>
        <h2>About JAL</h2>
        <Ul ulfooter>
          <Li>
            <A afooter="true" href="https://www.jal.com/en/outline/">
              Company Profile and Corporate Policy
            </A>
          </Li>
          <Li>
            <A afooter="true" href="https://www.jal.com/en/flight/">
              Safety and Quality
            </A>
          </Li>
          <Li>
            <A afooter="true" href="https://www.jal.com/en/sustainability/">
              SustainabilityThis page will open in a new window
            </A>
          </Li>
        </Ul>
      </Div>
      <P></P>
    </Footer>
  );
}

export default FooterDiv;
