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
  const wilaya = [
    "Tlemcen",
    "sidi belabess",
    "oran",
    "Ain témouchent",
    "mostaghanem",
    "mascara",
    "chlef",
    "ghilizene",
    "djelfa",
    "blida",
    "alger",
    "rouiba",
    "boumerdes",
    "bejaia",
    "tizi",
    "skikda",
    "bouira",
    "bayadh",
    "bachar",
    "setif",
    "annaba",
    "tebessa",
    "bordj",
    "jijel",
    "saida",
    "medéa",
  ];
  return (
    <WilayaContainer id="wilaya">
      <div className="WilayaWraper">
        <WilayaTop>
          <span>les wilaya concerné</span>
        </WilayaTop>
        <WilayaBottom>
          <WilayaLeft>
            <ul>
              {wilaya.map((item) => (
                <li>{item}</li>
              ))}
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
