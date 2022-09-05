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
import YouTube from "react-youtube";

function Promo(props) {
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
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
          {/* <img src={youtube} alt="" onClick={() => props.setVidOpen(true)} /> */}
        </div>
      </PromoLeft>
      <PromoRight>
        {/* <img src={phone} alt="" /> */}

        <YouTube
          videoId="ciF7WZXmpjU"
          opts={opts}
          onReady={onPlayerReady}
          loading="true"
        />
      </PromoRight>
      <Phone />
    </PromoContainer>
  );
}

export default Promo;
