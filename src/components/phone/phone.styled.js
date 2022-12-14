import styled from "styled-components";

const Phonecontainer = styled.div`
  display: flex;
  background-color: var(--main-yellow);
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 90%;
  border-radius: 50px;
  bottom: 0;
  left: 50%;
  padding: 1.5vw 2vw;
  transform: translate(-50%, 50%);
  border: 1px solid var(--main-yellow);

  @media (max-width: 700px) {
    display: none;
  }
`;
const PhoneItem = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--main-black);
  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 1vw;
    span {
      font-size: 1.5vw;
    }
    img {
      width: 3vw;
    }
    @media (max-width: 1050px) {
    }
  }
`;

const PhoneNumber = styled.span`
  color: var(--main-black);
  font-size: 5vw;
`;
const PhoneTitle = styled.span`
  color: var(--main-black);
  font-size: 1.5vw;
`;

export { PhoneNumber, PhoneTitle, Phonecontainer, PhoneItem };
