"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import 'swiper/css';
import styles from './slideshow.module.css'
import { SlideshowSlide, Slides } from "./types";

const SwiperSlides = (slides: Slides) => {
  return slides.map((slide: SlideshowSlide, i) => {
    const text = slide.textOverlay ? <p>{slide.textOverlay}</p> : "";
    return (
      <SwiperSlide key={`${i}-${slide.altText.slice(0,5)}`} >
        <Image
            key={`${i}-${slide.altText.slice(0,5)}`}
            fill
            src={slide.imageURL}
            objectFit="cover"
            alt={slide.altText}
          />
        {text}
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
      modules={[Parallax,Navigation, Pagination]}
      centeredSlides={true}
      parallax={true} 
      pagination={{
        clickable: true,
      }}
      className={styles.slideshow} >
      {slides}
    </Swiper>
  );
}

export { Slideshow };
