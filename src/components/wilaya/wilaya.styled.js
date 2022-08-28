import styled from "styled-components";

const WilayaContainer = styled.div`
  .WilayaWraper {
    display: flex;
    flex-direction: column;
    gap: 2vw;
    padding: 5% 5%;
  }
`;
const WilayaTop = styled.div`
  span {
    color: var(--main-yellow);
    text-transform: capitalize;
    font-size: 3vw;
    @media (max-width: 1050px) {
      font-size: 3.5vw;
    }
    @media (max-width: 700px) {
      font-size: 5vw;
    }
  }
`;
const WilayaBottom = styled.div`
  color: white;
  display: flex;
  text-transform: capitalize;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const WilayaLeft = styled.div`
  width: 50%;
  display: flex;
  ul {
    width: 100%;
    height: 40vw;
    display: flex;
    column-gap: 2.5vw;
    row-gap: 1vw;
    flex-direction: column;
    flex-wrap: wrap;
    font-size: 1.5vw;
    list-style-position: inside;
    padding-left: 0;
    font-weight: 300;

    @media (max-width: 1050px) {
      font-size: 1.8vw;
    }
  }

  @media (max-width: 700px) {
    width: 100%;
    ul {
      width: 100%;
      height: 35vw;
      display: flex;

      row-gap: 1vw;
      flex-direction: column;
      flex-wrap: wrap;
      font-size: 3vw;
      font-weight: 300;
    }
  }
`;
const WilayaRight = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 40vw;
  }
  @media (max-width: 1050px) {
    img {
      height: 45vw;
    }
  }
  @media (max-width: 700px) {
    width: 100%;
    img {
      height: 60vw;
    }
  }
`;

export { WilayaContainer, WilayaTop, WilayaBottom, WilayaLeft, WilayaRight };
