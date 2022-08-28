import React from "react";
import {
  PhoneCenter,
  Phonecontainer,
  PhoneItem,
  PhoneLeft,
  PhoneNumber,
  PhoneRight,
  PhoneTitle,
} from "./phone.styled";
import time from "../../assets/timeIcon.svg";
import support from "../../assets/support.svg";
import phone from "../../assets/phone2.svg";
function Phone() {
  return (
    <Phonecontainer>
      <PhoneItem>
        <div>
          <img src={support} alt="" />
          <span>24/24 Pour vous assister</span>
        </div>
      </PhoneItem>
      <PhoneItem>
        <div>
          <img src={phone} alt="" />
          <span>Appelez-nous 09 81 30 30 60</span>
        </div>
      </PhoneItem>
      <PhoneItem>
        <div>
          <img src={time} alt="" />
          <span>Chez-vous en: -45 mins</span>
        </div>
      </PhoneItem>
    </Phonecontainer>
  );
}

export default Phone;
