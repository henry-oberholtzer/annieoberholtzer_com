import type { NextPageWithLayout } from "./_app"
import Layout from "@/components/Layout/Layout"
import type { ReactElement } from "react"

const Media: NextPageWithLayout = () => {
  return (
    <p>Placeholder for Media Page</p>
  )
}

Media.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Media
