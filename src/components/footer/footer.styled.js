import styled from "styled-components";

const FooterContainer = styled.footer``;
const FooterTop = styled.div`
  display: flex;
  color: white;
  justify-content: space-between;
  padding: 2vw 5vw;
  border-bottom: 1px solid var(--main-yellow);
  font-weight: 300;
  span {
    font-size: 2.5vw;
    font-weight: 500;
    span {
      color: var(--main-yellow);
    }
  }
  p {
    width: 95%;
    font-size: 1.5vw;
  }
  img {
    height: 5vw;
  }
  @media (max-width: 1050px) {
    span {
      font-size: 3.5vw;
    }
    p {
      font-size: 1.8vw;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    span {
      font-size: 6.5vw;
    }
    p {
      width: 100%;
      font-size: 3.5vw;
    }
    img {
      align-self: start;
      height: 9vw;
    }
  }
`;
const FooterBottom = styled.div`
  color: white;
  padding: 1vw 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 300;
  span:nth-child(1) {
    text-transform: capitalize;
  }
  span {
    font-size: 1.5vw;
  }
  @media (max-width: 1050px) {
    span {
      font-size: 2vw;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 2vw;
    span {
      font-size: 3vw;
      width: 100%;
    }
  }
`;
const InfoContainer = styled.div`
  display: flex;

  gap: 3vw;
  @media (max-width: 700px) {
    width: 100%;
    img {
      height: 3.5vw;
    }
  }
`;
const InfoItem = styled.div`
  display: flex;

  align-items: center;
  gap: 1vw;
  img {
    height: 1.5vw;
  }
  @media (max-width: 700px) {
    img {
      height: 3.5vw;
    }
  }
`;

export { FooterBottom, FooterTop, FooterContainer, InfoContainer, InfoItem };
