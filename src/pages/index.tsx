import type { NextPageWithLayout } from "./_app";
import Layout from "@/components/Layout/Layout";
import type { ReactElement } from "react";
import styles from './index.module.css';
import Image from "next/image";
import data from "./index.json"


const Page: NextPageWithLayout = () => {
  return (
    <div className={styles.about}>
      <Image src={"./media/annie_index_page.jpg"} alt={"Annie with fencing sword in a lunge."} fill objectFit="cover" style={{ transform: "scaleX(-1) scale(1.15)", left: "-80px", top: "-80px"}} />
      <section className={styles.text}>
        <h2>{data.h2}</h2>
        <h3 style={{ fontWeight: "normal" }}>{data.h3}</h3>
        {data.p.map((string) => {
          return (
            <>
            <p dangerouslySetInnerHTML={{ __html: string }} />
            <br/>
            </>
          )
        })}
      </section>
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
