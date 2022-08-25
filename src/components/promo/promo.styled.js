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
  width: 50%;
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
      height: 5vw;
    }
  }

  @media (max-width: 1050px) {
    div {
      img {
        height: 7vw;
      }
    }
  }
  @media (max-width: 700px) {
    width: 100%;

    div {
      padding: 0 6vw;
      img {
        height: 11vw;
      }
    }
  }
`;
const PromoTitle = styled.span`
  font-size: 4.2vw;
  align-self: flex-start;
  span {
    color: var(--main-yellow);
  }
  @media (max-width: 1050px) {
    font-size: 4.5vw;
    text-align: justify;
  }
  @media (max-width: 700px) {
    font-size: 7.2vw;
    text-align: justify;
    padding: 0 6vw;
  }
`;
const PromoDownload = styled.span`
  align-self: flex-start;
  font-size: 2.2vw;
  font-weight: 300;
  @media (max-width: 1050px) {
    font-size: 3.2vw;
  }
  @media (max-width: 700px) {
    font-size: 4.2vw;
    text-align: justify;
    padding: 0 6vw;
  }
`;
const PromoRight = styled.div`
  width: 40%;
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
      height: 45vw;
    }
  }
  @media (max-width: 700px) {
    width: 100%;
    img {
      height: 45vw;
    }
  }
`;

export { PromoContainer, PromoLeft, PromoTitle, PromoDownload, PromoRight };
