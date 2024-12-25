import type { NextPageWithLayout } from "../_app"
import Layout from "@/components/Layout/Layout"
import type { ReactElement } from "react"
import styles from './resume.module.css'
import { NavigationGroup } from "@/components";
import data from "./resume.json";
import images from "./headshots.json";
import MediaEmbed from "@/components/MediaEmbed/MediaEmbed"

const downloads: NavigationButton[] = [
  {
  name: "Download Resume",
  to: "downloads/AnnieOberholtzerResume2025.pdf",
  download: "AnnieOberholtzerResume2025",
  target: "blank"
  },
  {
    name: "Download Resume & Headshots",
    to: "downloads/AnnieOberholtzerResumeHeadshots.zip",
    download: "AnnieOberholtzerResumeHeadshots",
    target: "blank",
  },
  {
    name: "Actors Access",
    to: "https://resumes.actorsaccess.com/annieoberholtzer",
    target: "blank"
  }
  ]

const About: NextPageWithLayout = () => {
  const download = (<NavigationGroup routes={downloads} />)
  return (
    <div>
      <div className={styles.headshotResume}>
        <MediaEmbed 
          width={images.width}
          height={images.height}
          src={images.src}
        />
        <div className={styles.resume}>
          {download}
          <section>
            <h2>{data.name}</h2>
            {data.bio}
          </section>
          <br />
          <section className={styles.performances}>
            {data.acting.map((type, i) => {
              return (
                <table key={i}>
                  <caption>{type.category}</caption>
                  <thead>
                    <td>Name</td>
                    <td>Role</td>
                    <td>Company</td>
                  </thead>
                  <tbody>
                    {type.productions.map((prod, i) => {
                      return (
                        <tr key={i}>
                          <th scope="row">{prod.name}</th>
                          <td>{prod.role}</td>
                          <td>{prod.company}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              )
            })}
          </section>
          <br />
          <hr />
          <br />
          <section className={styles.education}>
            <table>
              <caption>{data.education.title}</caption>
              <tr>
                <td colSpan={3}>{data.education.description}</td>
              </tr>
              <thead>
                <td>Category</td>
                <td colSpan={2}>Classes</td>
              </thead>
              <br />
              <tbody>
                {data.education.categories.map((cat, i) => {
                  return (
                    <>
                    <tr key={i}>
                      <th scope="row">{cat.title}</th>
                      <td colSpan={2}>
                        <ul>
                          {cat.classes.map((classes, j) => {
                            return (
                              <li key={j}>{classes.name ? (<i>{classes.name}&nbsp;</i>) : "" }{classes.instructors?.join(", ")}</li>
                            )
                          })}
                        </ul>
                      </td>
                    </tr>
                    <br />
                    </>
                  )
                })}
              </tbody>
            </table>
            {download}
          </section>
        </div>
      </div>
    </div>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default About


