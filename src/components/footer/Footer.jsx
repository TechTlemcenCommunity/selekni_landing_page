import React from "react";
import {
  FooterBottom,
  FooterContainer,
  FooterTop,
  InfoContainer,
  InfoItem,
} from "./footer.styled";
import googlePlay from "../../assets/googlePlay.svg";
import phoneIcon from "../../assets/phoneIcon.svg";
import emailIcon from "../../assets/email.svg";
function Footer() {
  return (
    <footer>
      <FooterTop>
        <div>
          <span>
            ALLO.<span>SELEKNI</span>
          </span>
          <p>
            Société spécialisée dans le remorquage voiture et le dépannage auto
            à Paris et dans toute l’Ile de France. Notre équipe est à votre
            service 7 jours sur 7 et 24h/24.
          </p>
        </div>
        <img src={googlePlay} alt="" />
      </FooterTop>
      <FooterBottom>
        <span>2022 © all copyrights reserved.</span>
        <InfoContainer>
          <InfoItem>
            <img src={phoneIcon} alt="" />
            <span>0783865477</span>
          </InfoItem>
          <InfoItem>
            <img src={emailIcon} alt="" />
            <span>Selekni@gmail.com </span>
          </InfoItem>
        </InfoContainer>
      </FooterBottom>
    </footer>
  );
}

export default Footer;
