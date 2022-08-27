import React from "react";
import googlePlay from "../../assets/googlePlay.svg";
import youtube from "../../assets/youtube.svg";
import phone from "../../assets/phone.svg";
import Phone from "../phone/Phone";
import {
  PromoContainer,
  PromoDownload,
  PromoLeft,
  PromoRight,
  PromoTitle,
} from "./promo.styled";

function Promo(props) {
  return (
    <PromoContainer id="accueil">
      <PromoLeft>
        <PromoTitle>
          Avec <span>Selekni</span>,<br /> vous ne serez jamais seul en cas de
          besoin !
        </PromoTitle>
        <PromoDownload>
          Téléchargez gratuitement l'application sur votre téléphone.
        </PromoDownload>
        <div>
          <img src={googlePlay} alt="" />
          <img src={youtube} alt="" onClick={() => props.setVidOpen(true)} />
        </div>
      </PromoLeft>
      <PromoRight>
        <img src={phone} alt="" />
      </PromoRight>
      <Phone />
    </PromoContainer>
  );
}

export default Promo;
