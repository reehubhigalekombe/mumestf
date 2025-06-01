import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "../styles/homeslide.css";

export default function Homeslide() {
  return (
    <Swiper
      modules={[EffectFade, Pagination, Autoplay]}
      effect="fade"
      fadeEffect={{
        crossFade: false
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="my-swiper"
    >
      {["p4.jpg", "ken.jpg", "luni.jpg"].map((img, i) => (
        <SwiperSlide key={i}>
          <div
            className="sliding-backg"
            style={{
              backgroundImage: `url("http://localhost:5000/uploads/${img}")`,
            }}
          >
            <div className="my-contents">
              <h1>Mumias East Constituency</h1>
              <p>Welcome Ingo Abanbefwe</p>
              <button>View All</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
