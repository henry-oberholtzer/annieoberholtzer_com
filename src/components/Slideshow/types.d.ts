import { StaticImageData } from "next/image";

interface SlideshowSlide {
  imageURL: string | StaticImageData;
  altText: string;
}

type Slides = SlideshowSlide[]
