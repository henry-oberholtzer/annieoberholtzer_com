import type { NextPageWithLayout } from "../_app"
import Layout from "@/components/Layout/Layout"
import type { ReactElement } from "react"

const Contact: NextPageWithLayout = () => {
  return (
	<iframe
		src="https://docs.google.com/forms/d/e/1FAIpQLSfe44ooy8AsfI_SEPqnmGPlt3ACUwsf4JunwZVXS16HRUomHw/viewform?embedded=true" 
		width={1048}
		height={1000}
		style={{
			border: 0
		}}
		marginHeight={0}
		marginWidth={0}>
		Loading…
	</iframe>
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
