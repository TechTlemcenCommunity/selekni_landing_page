import styled from "styled-components";

const PromoContainer = styled.div`
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 6vw 0;
  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;
const PromoLeft = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 2vw;
  position: relative;
  div {
    display: flex;
    align-self: flex-start;
    align-items: center;
    gap: 2vw;
    img {
      height: 6vw;
    }
  }

  @media (max-width: 1050px) {
    div {
      img {
        height: 6.2vw;
      }
    }
  }
  @media (max-width: 700px) {
    width: 100%;
    gap: 3vw;
    div {
      padding: 0 6vw;
      img {
        height: 12vw;
      }
    }
  }
`;
const PromoTitle = styled.span`
  font-size: 3.8vw;
  align-self: flex-start;
  span {
    color: var(--main-yellow);
  }
  @media (max-width: 1050px) {
    font-size: 4vw;
  }
  @media (max-width: 700px) {
    font-size: 7.5vw;
    br {
      display: none;
    }
    text-align: justify;
    padding: 0 6vw;
  }
`;
const PromoDownload = styled.span`
  align-self: flex-start;
  font-size: 2.2vw;
  font-weight: 300;
  @media (max-width: 1050px) {
    font-size: 2.4vw;
  }
  @media (max-width: 700px) {
    font-size: 4vw;
    text-align: justify;
    padding: 0 6vw;
  }
`;
const PromoRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  image-rendering: optimizeSpeed;
  img {
    width: 100%;
    height: 35vw;
  }
  @media (max-width: 1050px) {
    img {
      height: 40vw;
    }
  }
  @media (max-width: 700px) {
    width: 100%;
    img {
      height: 60vw;
    }
  }
`;

export { PromoContainer, PromoLeft, PromoTitle, PromoDownload, PromoRight };
