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
            Une plateforme permettant de trouver les meilleurs professionnels du
            dépannage auto et moto dans plusieurs wilaya en Algérie et à prix
            étudiés par nos soins.Notre objectif est d’apporter une solution
            rapide et efficace et révolutionner le marché du dépannage
            automobile en Algérie
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
