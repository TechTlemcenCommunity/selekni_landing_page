import styled from "styled-components";

const TestmenItemContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5vw;
  padding: 4vw 2vw;
  width: 20vw;
  border-radius: 20px;
  p {
    text-align: center;
    font-size: 1.5vw;
  }
  img {
    width: 100%;
    height: 3vw;
  }
  @media (max-width: 1050px) {
    width: 25vw;
    p {
      text-align: center;
      font-size: 2vw;
    }
  }
  @media (max-width: 700px) {
    width: 60vw;
    p {
      font-size: 3vw;
    }
    img {
      height: 5vw;
    }
  }
`;

export { TestmenItemContainer };
