import React, { useRef } from "react";
import { useInViewport } from "react-in-viewport";

import { StatsContainer, StatsItem } from "./stats.styled";
import CountUp from "react-countup";

function Stats() {
  const myRef = useRef();
  const { inViewport } = useInViewport(myRef);
  console.log(inViewport);
  return (
    <StatsContainer ref={myRef}>
      <StatsItem>
        {inViewport ? <CountUp end={1200} /> : <span>1200</span>}
        <span>dépanneuse active</span>
      </StatsItem>
      <StatsItem>
        {inViewport ? <CountUp end={28} /> : <span>28</span>}
        <span>wilaya</span>
      </StatsItem>
      <StatsItem>
        {inViewport ? (
          <span>
            <CountUp end={24} />
            h/
            <CountUp end={24} />
          </span>
        ) : (
          <span>1200</span>
        )}

        <span>Heures de travail</span>
      </StatsItem>
      <StatsItem>
        {inViewport ? <CountUp end={140} /> : <span>140</span>}

        <span>happy customer</span>
      </StatsItem>
    </StatsContainer>
  );
}

export default Stats;
