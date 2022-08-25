import React from "react";
import TestemItem from "../testemItem/TestemItem";
import { TestmenBody, TestmenContainer, TestmenTitle } from "./testmen.styled";

function Testmen() {
  return (
    <TestmenContainer id="temoignages">
      <TestmenTitle>Ce qu’en pensent nos utilisateurs</TestmenTitle>
      <TestmenBody>
        <TestemItem />
        <TestemItem />
        <TestemItem />
      </TestmenBody>
    </TestmenContainer>
  );
}

export default Testmen;
