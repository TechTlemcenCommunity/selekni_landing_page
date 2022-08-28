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
    padding: 5% 0;
  }
`;
const PhoneMobileItem = styled.div`
  display: flex;
  font-size: 4vw;
  flex-direction: column;
  align-items: center;
  padding: 2vw 0;
  gap: 1vw;
  img {
    width: 9vw;
  }
`;

export { PhoneMobileConatiner, PhoneMobileItem };
