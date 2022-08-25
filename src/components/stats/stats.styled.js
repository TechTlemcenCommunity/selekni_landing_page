import styled from "styled-components";

const StatsContainer = styled.div`
  padding: 4vw 10vw;
  display: flex;
  justify-content: space-between;

  color: white;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 8vw;
  }
`;
const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5vw;
  span:nth-child(1) {
    color: var(--main-yellow);
    font-size: 3vw;
  }
  span:nth-child(2) {
    font-size: 1.5vw;
    font-weight: 400;
  }
  @media (max-width: 1050px) {
    span:nth-child(1) {
      color: var(--main-yellow);
      font-size: 3.6vw;
    }
    span:nth-child(2) {
      font-size: 1.8vw;
      font-weight: 400;
    }
  }
  @media (max-width: 700px) {
    span:nth-child(1) {
      color: var(--main-yellow);
      font-size: 8vw;
    }
    span:nth-child(2) {
      font-size: 4vw;
      font-weight: 200;
    }
  }
`;
export { StatsContainer, StatsItem };
