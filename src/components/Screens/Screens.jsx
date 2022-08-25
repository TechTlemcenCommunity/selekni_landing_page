import React from "react";
import { ScreensContainer, ScreensLeft, ScreensRight } from "./screens.styled";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import screen1 from "../../assets/screen1.svg";
import screen2 from "../../assets/screen2.svg";
import screen3 from "../../assets/screen3.svg";
import screen4 from "../../assets/screen4.svg";
import phone from "../../assets/phones.png";
function Screens() {
  return (
    <ScreensContainer>
      <div className="blur"></div>
      <div className="screenWrapper">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            240: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={screen1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={screen2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={screen3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={screen4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </ScreensContainer>
  );
}

export default Screens;
