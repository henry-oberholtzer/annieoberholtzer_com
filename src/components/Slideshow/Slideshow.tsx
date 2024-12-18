"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/effect-cards';
import styles from './slideshow.module.css'
import { SlideshowSlide, Slides } from "./types";
import { EffectCards } from "swiper/modules";

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
      effect={"cards"}
      modules={[EffectCards]}
      grabCursor={true}
      cardsEffect={{
      }}
    >
      {slides}
    </Swiper>
  );
}

export { Slideshow };
