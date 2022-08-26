import styled from "styled-components";

const TestmenContainer = styled.div`
  background-color: var(--main-yellow);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2vw;
  padding: 5% 0%;
`;
const TestmenTitle = styled.h1`
  text-transform: capitalize;
  margin: 0;
  font-size: 3vw;
  font-weight: 400;
  @media (max-width: 1050px) {
    font-size: 4vw;
  }
  @media (max-width: 700px) {
    font-size: 5vw;
  }
`;
const TestmenBody = styled.p`
  display: flex;
  gap: 2vw;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

export { TestmenContainer, TestmenTitle, TestmenBody };
