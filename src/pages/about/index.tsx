import type { NextPageWithLayout } from "../_app"
import Layout from "@/components/Layout/Layout"
import type { ReactElement } from "react"
import MediaEmbed from "@/components/MediaEmbed/MediaEmbed"
import data from "./about.json";

const Contact: NextPageWithLayout = () => {
  return (
   <div>
   	<section>
		<MediaEmbed src={data.media.src} width={data.media.width} height={data.media.height} />
	</section>
	<section>
		<h1>{data.h1}</h1>
		{data.p.map((paragraph) => {
			return (
				<p>{paragraph}</p>
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
