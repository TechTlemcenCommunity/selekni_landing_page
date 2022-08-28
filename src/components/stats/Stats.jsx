import React from "react";
import { StatsContainer, StatsItem } from "./stats.styled";

function Stats() {
  return (
    <StatsContainer>
      <StatsItem>
        <span>1200</span>
        <span>dépanneuse active</span>
      </StatsItem>
      <StatsItem>
        <span>28</span>
        <span>wilaya</span>
      </StatsItem>
      <StatsItem>
        <span>24h/24</span>
        <span>Heures de travail</span>
      </StatsItem>
      <StatsItem>
        <span>140</span>
        <span>happy customer</span>
      </StatsItem>
    </StatsContainer>
  );
}

export default Stats;
