import React from "react";
import {
  AdvntItemContainer,
  AdvntItemImage,
  AdvntItemText,
} from "./AdvantagesItem.styled";
import Slide from "react-reveal/Slide";

function AdvantagesItem(props) {
  return (
    <AdvntItemContainer>
      {!props.inverse ? (
        <>
          <AdvntItemText>
            <div>
              <h2>{props.title}</h2>
              <span>{props.text}</span>
            </div>
          </AdvntItemText>
          <AdvntItemImage>
            <img src={props.img} alt="" />
          </AdvntItemImage>
        </>
      ) : (
        <>
          <AdvntItemImage>
            <img src={props.img} alt="" />
          </AdvntItemImage>
          <AdvntItemText>
            <div>
              <h2>{props.title}</h2>
              <span>{props.text}</span>
            </div>
          </AdvntItemText>
        </>
      )}
    </AdvntItemContainer>
  );
}

export default AdvantagesItem;
