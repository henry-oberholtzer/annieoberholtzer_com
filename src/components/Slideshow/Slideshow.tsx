"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './slideshow.module.css'
import { SlideshowSlide, Slides } from "./types";
import { EffectCards, Pagination, Navigation } from "swiper/modules";

const SwiperSlides = (slides: Slides, width?: int, height) => {
  return slides.map((slide: SlideshowSlide, i) => {
    return (
      <SwiperSlide className={styles.swiperSlide} key={`${i}-${slide.altText.slice(0,5)}`} >
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
      className={styles.swiper}
      centeredSlides={true}
      slidesPerView={'auto'}
      spaceBetween={16}
      loop={true}
      effect="cards"
      grabCursor={true}
      modules={[Pagination, EffectCards, Navigation]}
      pagination={{
        dynamicBullets: true,
        clickable: true
      }}
      cardsEffect={{
        perSlideOffset: 16,
      }}
    >
      {slides}
    </Swiper>
  );
}

export { Slideshow };
