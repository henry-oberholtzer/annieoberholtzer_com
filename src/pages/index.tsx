import { Slideshow, Container } from "@/components";
import placeholder from '../app/media/images/placeholder.jpg'
import annie_cafe from '../app/media/images/annie_cafe.jpg';
import annie_railroad from '../app/media/images/annie_railroad.jpg'
import { SlideshowSlide } from "@/components/Slideshow/types";
import type { NextPageWithLayout } from "./_app";
import Layout from "@/components/Layout/Layout";
import type { ReactElement } from "react";
import { Metadata } from "next";

const slideshowContents: SlideshowSlide[] = [
  {
    imageURL: placeholder,
    altText: "This is placeholder text",
  },
  {
    imageURL: annie_cafe,
    altText: "This is placeholder text",
  }
]

export const metadata: Metadata = {
  title: "Annie Oberholtzer",
  description: "Actress & fight coordinator",
};

const Page: NextPageWithLayout = () => {
  return (
      <Container padding="0px 16px">
            <Slideshow props={slideshowContents}/>
            <div style={{ height: "800px" }}>
              <h2>Hi! I&apos;m Annie Oberholtzer.</h2>
              <h3 style={{ fontWeight: "normal" }}>NYC based actor & fight coordinator.</h3>
            </div>
      </Container>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page
