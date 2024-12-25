import type { NextPageWithLayout } from "../_app"
import Layout from "@/components/Layout/Layout"
import type { ReactElement } from "react"
import Head from 'next/head';

const Contact: NextPageWithLayout = () => {
  return (
	<>
		<Head>
			<meta property="og:title" key="title" content="Contact - Annie Oberholtzer" />
		</Head>
		<iframe
			src="https://docs.google.com/forms/d/e/1FAIpQLSfe44ooy8AsfI_SEPqnmGPlt3ACUwsf4JunwZVXS16HRUomHw/viewform?embedded=true" 
			width={1048}
			height={1000}
			style={{
				border: 0,
				margin: 0
			}}
			>
			Loading…
		</iframe>
	</>
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
