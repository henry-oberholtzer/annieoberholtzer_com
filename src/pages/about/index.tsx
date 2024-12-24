import type { NextPageWithLayout } from "../_app"
import Layout from "@/components/Layout/Layout"
import type { ReactElement } from "react"

const Contact: NextPageWithLayout = () => {
  return (
    <p>Placeholder for About Page</p>
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
