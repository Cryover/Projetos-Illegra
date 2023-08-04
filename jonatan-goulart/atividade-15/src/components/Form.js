//import ReactCSSTransitionGroup from "react-transition-group";
import { FormContact, Input, Button, Div, H2 } from "../style/Styled";

function Form() {
  const SubmitForm = () => {
    alert("Your message has been sent, we will contact you soon!");
  };

  return (
    <FormContact onSubmit={SubmitForm}>
      <H2>Contact Us</H2>
      <Div>
        <Input
          contacts="true"
          type="text"
          id="name"
          name="name"
          placeholder="Your full name*"
          required
        />
      </Div>
      <Div>
        <Input
          contacts="true"
          type="email"
          id="email"
          name="email"
          placeholder="Your email*"
          required
        />
      </Div>
      <Div>
        <Input
          contacts="true"
          type="tel"
          id="tel"
          name="tel"
          placeholder="Your Phone*"
          required
        />
      </Div>
      <Div buttondiv>
        <Button
          contact="true"
          whileTap={{ scale: 0.9 }}
          type="submit"
          value="Send"
        >
          Send
        </Button>
        <Button
          contact="true"
          whileTap={{ scale: 0.9 }}
          type="reset"
          value="Reset"
        >
          Reset
        </Button>
      </Div>
    </FormContact>
  );
}

export default Form;
