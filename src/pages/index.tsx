import { Slideshow, Container } from "@/components";
import placeholder from './media/images/placeholder.jpg'
import { SlideshowSlide } from "@/components/Slideshow/types";


const slideshowContents: SlideshowSlide[] = [
  {
    imageURL: placeholder,
    altText: "This is placeholder text",
  },
  {
    imageURL: placeholder,
    altText: "This is placeholder text",
  }
]

export default function Home() {
  return (
    <>
      <Container padding="0px 16px">
            <Slideshow props={slideshowContents}/>
            <div style={{ height: "800px"}}>
              <h2>Hi! I&apos;m Annie Oberholtzer.</h2>
              <h3>NYC based actor & fight coordinator.</h3>
            </div>
      </Container>
    </>
  );
}
