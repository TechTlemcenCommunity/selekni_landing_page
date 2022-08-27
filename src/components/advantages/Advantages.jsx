import React from "react";
import { Fade } from "react-reveal";
import AdvantagesItem from "../advantagesItem/AdvantagesItem";
import {
  AdvantagesBody,
  AdvantagesContainer,
  AdvantagesTitle,
} from "./advantages.styled";
import { items } from "./items";
function Advantages() {
  return (
    <AdvantagesContainer id="advantages">
      <AdvantagesTitle>Découvrez les avantages</AdvantagesTitle>
      <Fade className="fade">
        <AdvantagesBody>
          {items.map((item) => (
            <AdvantagesItem
              title={item.title}
              text={item.text}
              img={item.img}
              inverse={item.reverse}
            />
          ))}
        </AdvantagesBody>
      </Fade>
    </AdvantagesContainer>
  );
}

export default Advantages;
