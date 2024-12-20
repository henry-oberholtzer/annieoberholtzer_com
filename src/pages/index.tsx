import { Slideshow } from "@/components";
import placeholder from '../app/media/images/placeholder.jpg'
import annie_cafe from '../app/media/images/annie_cafe.jpg';
import annie_railroad from '../app/media/images/annie_railroad.jpg'
import { SlideshowSlide } from "@/components/Slideshow/types";
import type { NextPageWithLayout } from "./_app";
import Layout from "@/components/Layout/Layout";
import type { ReactElement } from "react";
import { Metadata } from "next";
import styles from './index.module.css';

const slideshowContents: SlideshowSlide[] = [
  {
    imageURL: placeholder,
    altText: "This is placeholder text",
  },
  {
    imageURL: annie_cafe,
    altText: "This is placeholder text",
  },
  {
    imageURL: annie_railroad,
    altText: "This is placeholder text",
  }
]

export const metadata: Metadata = {
  title: "Annie Oberholtzer",
  description: "Actress & fight coordinator",
};

const Page: NextPageWithLayout = () => {
  return (
    <div className={styles.index_container} >
      <div className={styles.slideshow} >
        <Slideshow props={slideshowContents} />
      </div>
      <div className={styles.about}>
        <section>
          <h2>Hi! I&apos;m Annie Oberholtzer.</h2>
          <h3 style={{ fontWeight: "normal" }}>NYC based actor & fight coordinator.</h3>
        </section>
      </div>
    </div>
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
