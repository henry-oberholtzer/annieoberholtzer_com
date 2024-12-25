import type { NextPageWithLayout } from "../_app"
import Layout from "@/components/Layout/Layout"
import type { ReactElement } from "react"
import MediaEmbed from "@/components/MediaEmbed/MediaEmbed"
import data from "./about.json";
import styles from "./about.module.css";

const Contact: NextPageWithLayout = () => {
  return (
	<div className={styles.about}>
		<section>
			<MediaEmbed src={data.media.src} width={data.media.width} height={data.media.height} />
		</section>
		<section>
			<h1>{data.h1}</h1>
			{data.p.map((paragraph, i) => {
				return (
					<p key={i}>{paragraph}</p>
				)
			})}
		</section>
	</div>
  )
}

Contact.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Contact
