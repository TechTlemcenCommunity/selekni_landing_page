import styled from "styled-components";

const AdvantagesContainer = styled.div`
  padding-bottom: 20px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AdvantagesTitle = styled.h1`
  font-size: 3vw;
  font-weight: 400;
  margin-top: 5vw;
  text-transform: capitalize;
  @media (max-width: 1050px) {
    font-size: 4vw;
  }
  @media (max-width: 700px) {
    font-size: 5vw;
  }
`;
const AdvantagesBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

export { AdvantagesContainer, AdvantagesTitle, AdvantagesBody };
