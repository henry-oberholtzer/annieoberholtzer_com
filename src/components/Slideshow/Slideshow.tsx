"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import placeholder from '../../app/media/images/placeholder.jpg'

const Slideshow = () => {

  return (
    <Swiper slidesPerView={1}>
      <SwiperSlide>
        <Image
            src={placeholder}
            alt="Placeholder image"
          />
      </SwiperSlide>
      <SwiperSlide>
        <Image
            src={placeholder}
            alt="Placeholder image"
          />
      </SwiperSlide>
    </Swiper>
  )
}

export { Slideshow };
