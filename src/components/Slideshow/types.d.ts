import { StaticImageData } from "next/image";

interface SlideshowSlide {
  imageURL: string | StaticImageData;
  altText: string;
  textOverlay: string;
}

type Slides = SlideshowSlide[]
