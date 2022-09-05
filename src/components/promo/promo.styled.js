import styled from "styled-components";

const PromoContainer = styled.div`
  color: white;
  position: relative;
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 6vw 5%;
  gap: 2vw;
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
      cursor: pointer;
    }
  }

  @media (max-width: 1050px) {
    div {
      img {
        height: 6vw;
      }
    }
  }
  @media (max-width: 700px) {
    width: 100%;
    gap: 3vw;
    div {
      img {
        height: 10vw;
      }
    }
  }
`;
const PromoTitle = styled.span`
  font-size: 3vw;
  align-self: flex-start;
  span {
    color: var(--main-yellow);
  }
  @media (max-width: 1050px) {
    font-size: 3.5vw;
  }

  @media (max-width: 700px) {
    font-size: 7vw;
    br {
      display: none;
    }
  }
`;
const PromoDownload = styled.span`
  align-self: flex-start;
  font-size: 1.7vw;
  font-weight: 300;
  @media (max-width: 1050px) {
    font-size: 2vw;
  }
  @media (max-width: 700px) {
    font-size: 3.5vw;
  }
`;
const PromoRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  image-rendering: optimizeSpeed;
  div {
    height: 100%;
    width: 100%;
  }

  @media (max-width: 700px) {
    width: 100%;
    div {
      height: 60vw;
    }
  }
  /* img {
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
  } */
`;

export { PromoContainer, PromoLeft, PromoTitle, PromoDownload, PromoRight };
