"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import 'swiper/css';
import styles from './slideshow.module.css'
import { SlideshowSlide, Slides } from "./types";

const SwiperSlides = (slides: Slides) => {
  return slides.map((slide: SlideshowSlide, i) => {
    return (
      <SwiperSlide key={`${i}-${slide.altText.slice(0,5)}`} >
        <Image
            priority
            key={`${i}-${slide.altText.slice(0,5)}`}
            className={styles.image}
            src={slide.imageURL}
            alt={slide.altText}
          />
      </SwiperSlide>
    )
  })
}

const Slideshow = (obj: { props: Slides}) => {
  const props = obj.props;
  const slides = SwiperSlides(props)
  return (
    <Swiper 
      slidesPerView={'auto'} 
      speed={600} 
      modules={[Navigation, Pagination]}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
    >
      {slides}
    </Swiper>
  );
}

export { Slideshow };
