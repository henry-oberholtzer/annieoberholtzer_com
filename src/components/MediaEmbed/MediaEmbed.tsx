import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from './mediaembed.module.css';

import { SwiperSlide, Swiper } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

interface media_src {
  url: string,
  alt: string
  top?: number,
  left?: number
}

interface MediaEmbedProps {
  src: media_src[],
  date?: string | number,
  width?: number,
  height?: number,
  title?: string,
  description?: string,
}

interface MediaGroupProps {
  src: media_src[],
  width?: number,
  height?: number,
}

interface MediaRenderProps {
  src: media_src,
  width?: number,
  height?: number,
}

const MediaRender = (props: MediaRenderProps) => {
  const {src, width, height } = props;
  const urlRegex = /(youtube)|(vimeo)/gi;
  const mp4Regex = /(.mp4)/gi;
  if (src.url.match(urlRegex)) {
    return (
      <iframe width={width} height={height} src={`${src.url}&rel=0`}
      title={`YouTube video showing ${src.alt}`}
      style={{ border: 0 }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    )
  } else if (src.url.match(mp4Regex)) {
    return (
      <video>

      </video>
    )
  }
  return (
    <Image 
      src={`${src.url}`}
      priority
      alt={src.alt} 
      width={width} 
      height={height} 
      style={{ 
        objectFit: "cover", 
        objectPosition: `top ${src.top}px left ${src.left}px`
      }} />
  )
}

const MediaGroup = (props: MediaGroupProps) => {
  return props.src.map((src, i) => {
    return (
      <SwiperSlide key={i}>
        <MediaRender key={i} src={src} width={props.width} height={props.height} />
      </SwiperSlide>
    )
  })
}

const MediaEmbed = (props: MediaEmbedProps) => {
  const media = MediaGroup({ src: props.src, width: props.width, height: props.height});
  const title = props.title ? (<h3>{props.title}</h3>) : "";
  const date = props.date ? (<p>{props.date}</p>) : "";
  const desc = props.description ? (<p>{props.description}</p>) : "";
  return (
    <div>
      <Swiper
	  	className={styles.swiper}
        loop={true}
        modules={[Navigation, Pagination]}
        navigation
        pagination
        spaceBetween={0}
        centeredSlides
        slidesPerView={'auto'}
      >
        {media}
      </Swiper>
      {title}
      {date}
      {desc}
    </div>
  )
}

export default MediaEmbed;
