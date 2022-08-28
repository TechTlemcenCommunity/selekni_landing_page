import React from "react";
import { PhoneMobileConatiner, PhoneMobileItem } from "./PhoneMobile.styled";
import time from "../../assets/timeIcon.svg";
import support from "../../assets/support.svg";
import phone from "../../assets/phone2.svg";
function PhoneMobile() {
  return (
    <PhoneMobileConatiner>
      <PhoneMobileItem>
        <img src={support} alt="" />
        <span>24/24 Pour vous assister</span>
      </PhoneMobileItem>
      <PhoneMobileItem>
        <img src={phone} alt="" />
        <span>Appelez-nous 09 81 30 30 60</span>
      </PhoneMobileItem>
      <PhoneMobileItem>
        <img src={time} alt="" />
        <span>Chez-vous en: -45 mins</span>
      </PhoneMobileItem>
    </PhoneMobileConatiner>
  );
}

export default PhoneMobile;
