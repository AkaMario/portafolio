import React from "react";
import "./proyectos.css";
import Card from "../../components/Card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
export default function proyectos() {
  return (
    <div className="projecto-container">
      <h1 className="title-project-section">Proyectos</h1>
      <p className="description-project-section">
        Mi repertorio de proyectos mas relevantes
      </p>
      {/* <div className="card-container">
        <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div> */}
    </div>
  );
}
