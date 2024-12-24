import type { NextPageWithLayout } from "../_app"
import Layout from "@/components/Layout/Layout"
import type { ReactElement } from "react"
import data from './media.json'
import MediaEmbed from "@/components/MediaEmbed/MediaEmbed"

const Media: NextPageWithLayout = () => {
  const collections = data.collections.map((collection, i) => {
    return (
      <MediaEmbed
        key={i}
        src={collection.src}
        date={collection.date}
        width={collection.width}
        height={collection.height}
        title={collection.title}
        description={collection.description}
      />
    )
  })
  return (
    <>
      {collections}
    </>
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
