import React from "react";
import { TestmenItemContainer } from "./testemItem.styled";
import Vector from "../../assets/Vector.svg";
import { Flip } from "react-reveal";
function TestemItem() {
  return (
    <Flip bottom>
      <TestmenItemContainer>
        <img src={Vector} alt="" />
        <p>
          Pas toujours simple de trouver un dépanneur lorsque l’on est en panne
          au milieu de nul part. Grâce à la fonction GPS, on peut être dépanné
          n’importe où mais surtout, rapidement !{" "}
        </p>
        <span>Mohammed</span>
      </TestmenItemContainer>
    </Flip>
  );
}

export default TestemItem;
