import type { NextPageWithLayout } from "../_app"
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules";
import Layout from "@/components/Layout/Layout"
import type { ReactElement } from "react"
import Image from "next/image"
import headshot_1 from '../../app/media/headshots/annie_headshot_1.jpg'
import headshot_2 from '../../app/media/headshots/annie_headshot_2.jpg'
import headshot_3 from '../../app/media/headshots/annie_headshot_3.jpg'
import headshot_4 from '../../app/media/headshots/annie_headshot_4.jpg'
import styles from './about.module.css'
import { NavigationGroup } from "@/components";
import { SlideshowSlide } from "@/components/Slideshow/types";
import data from "./resume.json";

const images: SlideshowSlide[] = [
  {
    imageURL: headshot_1,
    altText: "Annie Oberholtzer Headshot"
  },
  {
    imageURL: headshot_2,
    altText: "Annie Oberholtzer Headshot"
  },
  {
    imageURL: headshot_3,
    altText: "Annie Oberholtzer Headshot",
  },
  {
    imageURL: headshot_4,
    altText: "Annie Oberholtzer Headshot"
  }
]

const downloads: NavigationButton[] = [
  {
  name: "Download Resume",
  to: "downloads/AnnieOberholtzerResume2025.pdf",
  download: "AnnieOberholtzerResume",
  target: "blank"
  },
  {
    name: "Download Media Pack",
    to: "",
    download: "AnnieOberholtzerMedia",
    target: "blank",
  },
  {
    name: "Actors Access",
    to: "https://resumes.actorsaccess.com/annieoberholtzer",
    target: "blank"
  }
  ]


const generateSlides = (slides: SlideshowSlide[]) => {
  return slides.map((i, index) => {
    return (
      <SwiperSlide 
        key={`${i.altText}${index}`}>
        <Image 
          key={`${i.altText}${index}`}
          src={i.imageURL} 
          width={300}
          alt={i.altText}
          className={styles.headshot} />
      </SwiperSlide>
    )})
}

const About: NextPageWithLayout = () => {
  const slides = generateSlides(images);
  const download = (<NavigationGroup routes={downloads} />)
  return (
    <div>
      <div className={styles.headshotResume}>
        <div className={styles.headshot}>
          <Swiper
            className={styles.swiper}
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
            modules={[Pagination]}
            autoplay={{
              delay: 2000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true
            }}
            >
              {slides}
          </Swiper>
        </div>
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
                <>
                  <table key={i}>
                    <caption>{type.category}</caption>
                    <thead>
                      <td>Name</td>
                      <td>Role</td>
                      <td>Company</td>
                    </thead>
                  </table>
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
                </>
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


