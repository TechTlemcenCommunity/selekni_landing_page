import React from "react";
import {
  WilayaBottom,
  WilayaContainer,
  WilayaLeft,
  WilayaRight,
  WilayaTop,
} from "./wilaya.styled";
import dz from "../../assets/dz.svg";
import { Fade } from "react-reveal";
function Wilaya() {
  return (
    <WilayaContainer>
      <div className="WilayaWraper">
        <WilayaTop>
          <span>les wilaya concerné</span>
        </WilayaTop>
        <WilayaBottom>
          <WilayaLeft>
            <Fade>
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
            </Fade>
          </WilayaLeft>
          <WilayaRight>
            <Fade>
              <img src={dz} alt="" />
            </Fade>
          </WilayaRight>
        </WilayaBottom>
      </div>
    </WilayaContainer>
  );
}

export default Wilaya;
