import { useState } from "react";
import { Div, A, Ul, Li } from "../style/Styled";
import { FiAlertTriangle } from "react-icons/fi";
import { AiOutlinePlusCircle } from "react-icons/ai";

export const Flights = () => {
  const [isOpen, setOpen] = useState(false);
  const [clicked, setClicked] = useState(false);

  return (
    <Div
      flight="true"
      layout
      style={{
        height: isOpen ? "51px" : "fit-content",
        transition: "0.3s",
      }}
    >
      <Ul ulNotices>
        <Li
          linoticesfirst="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <FiAlertTriangle />
          <A
            anotices="true"
            href="https://www.jal.co.jp/jp/en/info/2020/inter/201227/"
          >
            Notice to all passengers entering Japan (Last Updated October 25,
            2022)
          </A>
          <A
            aplusnotices="true"
            onClick={() => {
              setOpen(!isOpen);
              setClicked(!clicked);
            }}
          >
            <AiOutlinePlusCircle
              style={{
                width: "25px",
                height: "25px",
                transition: 0.3,
                color: clicked ? "gold" : "red",
              }}
            />
          </A>
        </Li>
        <Li
          linotices="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <FiAlertTriangle />
          <A
            anotices="true"
            href="https://www.jal.co.jp/jp/en/info/2022/other/220303/"
          >
            Notice regarding our operations on European, Russian routes (Last
            Updated September 21, 2022)
          </A>
        </Li>
        <Li
          linotices="true"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <FiAlertTriangle />
          <A
            anotices="true"
            href="https://www.jal.co.jp/jp/en/info/2020/other/200227_02/"
          >
            Regarding high volume at JAL contact center (Last Updated September
            9, 2022)
          </A>
        </Li>
      </Ul>
    </Div>
  );
};
