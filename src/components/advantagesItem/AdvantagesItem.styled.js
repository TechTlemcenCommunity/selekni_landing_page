import styled from "styled-components";

const AdvntItemContainer = styled.div`
  width: 100%;
  display: flex;
`;

const AdvntItemImage = styled.div`
  width: 50%;
  display: flex;
  img {
    width: 100%;
    height: 15vw;
    @media (max-width: 1050px) {
      height: 20vw;
    }
    @media (max-width: 700px) {
      height: 30vw;
    }
  }
`;
const AdvntItemText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  justify-content: center;
  div {
    width: 100%;
  }

  h2 {
    text-transform: capitalize;
    font-size: 2.5vw;
    font-weight: 400;
  }
  span {
    font-size: 1.7vw;
    font-weight: 200;
  }
  @media (max-width: 1050px) {
    h2 {
      font-size: 3vw;
    }
    span {
      font-size: 2.5vw;
    }
  }
  @media (max-width: 700px) {
    h2 {
      font-size: 4vw;
    }
    span {
      font-size: 3vw;
    }
    div {
      width: 100%;
    }
  }
`;
export { AdvntItemContainer, AdvntItemText, AdvntItemImage };
