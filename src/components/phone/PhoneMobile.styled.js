import styled from "styled-components";

const PhoneMobileConatiner = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: var(--main-black);
    gap: 2vw;
    background-color: var(--main-yellow);
  }
`;
const PhoneMobileItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw 0;
  img {
    width: 8vw;
  }
`;

export { PhoneMobileConatiner, PhoneMobileItem };
