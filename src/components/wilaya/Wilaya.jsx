import React from "react";
import {
  WilayaBottom,
  WilayaContainer,
  WilayaLeft,
  WilayaRight,
  WilayaTop,
} from "./wilaya.styled";
import dz from "../../assets/dz.svg";
function Wilaya() {
  return (
    <WilayaContainer>
      <div className="WilayaWraper">
        <WilayaTop>
          <span>les wilaya concerné</span>
        </WilayaTop>
        <WilayaBottom>
          <WilayaLeft>
            <ul>
              <li>Tlemcen</li>
              <li>chlef</li>
              <li>lghouet</li>
              <li>oum bouagi</li>
              <li>betna</li>
              <li>Bejia</li>
              <li>Tlemcen</li>
              <li>chlef</li>
              <li>lghouet</li>
              <li>oum bouagi</li>
              <li>betna</li>
              <li>Bejia</li>
              <li>Tlemcen</li>
              <li>Tlemcen</li>
              <li>chlef</li>
              <li>lghouet</li>
              <li>oum bouagi</li>
              <li>betna</li>
              <li>Bejia</li>
              <li>Tlemcen</li>
              <li>chlef</li>
              <li>lghouet</li>
              <li>oum bouagi</li>
              <li>betna</li>
              <li>Bejia</li>
              <li>Tlemcen</li>
              <li>Tlemcen</li>
              <li>chlef</li>
              <li>lghouet</li>
              <li>oum bouagi</li>
              <li>betna</li>
              <li>Bejia</li>
              <li>Tlemcen</li>
              <li>chlef</li>
              <li>lghouet</li>
              <li>oum bouagi</li>
              <li>betna</li>
              <li>Bejia</li>
            </ul>
          </WilayaLeft>
          <WilayaRight>
            <img src={dz} alt="" />
          </WilayaRight>
        </WilayaBottom>
      </div>
    </WilayaContainer>
  );
}

export default Wilaya;
