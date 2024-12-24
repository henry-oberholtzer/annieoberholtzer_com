import type { NextPageWithLayout } from "../_app"
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules";
import Layout from "@/components/Layout/Layout"
import type { ReactElement } from "react"
import Image from "next/image"
import headshot_1 from '../../app/media/images/annie_headshot.jpg'
import headshot_2 from '../../app/media/images/annie_headshot_2.jpg'
import headshot_3 from '../../app/media/images/annie_headshot_3.jpg'
import headshot_4 from '../../app/media/images/annie_headshot_4.jpg'
import styles from './about.module.css'
import { NavigationGroup } from "@/components";
import { SlideshowSlide } from "@/components/Slideshow/types";

const images: SlideshowSlide[] = [
  {
    imageURL: headshot_2,
    altText: "Annie Oberholtzer Headshot"
  },
  {
    imageURL: headshot_3,
    altText: "Annie Oberholtzer Headshot"
  },
  {
    imageURL: headshot_1,
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
  to: "/public/downloads/AnnieOberholtzerResume2025.pdf",
  download: "AnnieOberholtzerResume",
  target: "blank"
  },
  {
  name: "Download Headshots",
  to: "download",
  target: "blank"
  },
  {
  name: "Download All",
  to: "download",
  target: "blank"
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
              delay: 6000,
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
            <h2>Annie Oberholtzer</h2>
            Height: 5&apos;3&quot; | Hair: Brown | Eyes: Brown
          </section>
          <br />
          <section className={styles.performances}>
            <table>
              <caption>Theatre:</caption>
              <thead>
                <td>
                  Play Name
                </td>
                <td>
                  Role
                </td>
                <td>
                  Company
                </td>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Henry VI: Pt. 1 & 2</th>
                  <td>Warwick / John Talbot</td>
                  <td>C.A.G.E. Theater Company</td>
                </tr>
                <tr>
                  <th scope="row">Good Kids</th>
                  <td>Chloe</td>
                  <td>Missouri State University</td>
                </tr>
                <tr>
                  <th scope="row">Argonautica</th>
                  <td>Aeetes</td>
                  <td>Missouri State University</td>
                </tr>
                <tr>
                  <th scope="row">She Kills Monsters</th>
                  <td>U/S Lilith/Kaliope</td>
                  <td>Missouri State University</td>
                </tr>
                <tr>
                  <th scope="row">The Bitches</th>
                  <td>Susan</td>
                  <td>Missouri State University One Acts</td>
                </tr>
                <tr>
                  <th scope="row">Sweat</th>
                  <td>Assistant Fight Director</td>
                  <td>Missouri State University</td>
                </tr>
                <tr>
                  <th scope="row">Oklahoma</th>
                  <td>Fight Director</td>
                  <td>Springfield Catholic High School</td>
                </tr>
                <tr>
                  <th scope="row">Twelfth Night</th>
                  <td>Olivia</td>
                  <td>ACME Theater Company</td>
                </tr>
              </tbody>
            </table>
            <br />
            <table>
              <caption>Film:</caption>
              <thead>
                <td>
                  Film Name
                </td>
                <td>
                  Role
                </td>
                <td>
                  Company
                </td>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Seeking Stars</th>
                  <td>Lead</td>
                  <td>Missouri State University</td>
                </tr>
                <tr>
                  <th scope="row">Timeless</th>
                  <td>Lead</td>
                  <td>Missouri State University</td>
                </tr>
              </tbody>
            </table>
          </section>
          <br />
          <hr />
          <br />
          <section>
            <table>
              <caption>Education:</caption>
              <thead>
                <td>Focus</td>
                <td colSpan={2}>Classes</td>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={3}>Bachelor of Fine Arts - On Camera Certificate - Missouri State University</td>
                </tr>
                <br />
                <tr>
                  <th scope="row">Acting:</th>
                  <td colSpan={2}>
                    <ul>
                      <li><i>Acting:</i> Kurt Heinlein | Sarah Wiggin | Lisa Brescia | Robert Westenberg</li>
                      <li><i>Acting for the Camera:</i> Kurt Heinlein</li>
                      <li><i>Dialects:</i> Robert Westenberg</li>
                      <li><i>Voice and Movement:</i> Ed Swiney | Joe Price | Lisa Brescia</li> 
                    </ul>
                  </td>
                </tr>
                <br />
                <tr>
                  <th scope="row">
                    Stage Combat:
                  </th>
                  <td colSpan={2}>
                    <tr>
                      <p><i>FDC Certified Basic Action Combatant:</i></p>
                      <ul>
                        <li>Single Sword - Todd Campell</li>
                        <li>Quarterstaff - Daniel Levinson</li>
                        <li>Unarmed - Nate Bitton</li>
                        <li>Grappling - Kurt Heinlein</li>
                      </ul>
                    </tr>
                    <tr>
                      <p><i>SAFT Certified in Unarmed:</i></p>
                      <ul>
                        <li>Fightography - Jacqueline Holloway</li>
                      </ul>
                    </tr>
                  </td>
                </tr>
                <br />
                <tr>
                  <th scope="row">Voice:</th>
                  <td colSpan={2}>
                    <ul>
                      <li>Luann Higgs</li>
                      <li>Elodie Perroud</li>
                    </ul>
                  </td>
                </tr>
                <br />
                <tr>
                  <th scope="row">Workshops:</th>
                  <td>
                    <ul>
                      <li><i>Alexander:</i> Joe Krienke</li>
                      <li><i>Voice Over:</i> Ike Amadi</li>
                      <li><i>Shakespeare</i> James Garnon, Jill Zager</li>
                      <li><i>Casting:</i> Kate Kumpkin, Marisa Ross</li>
                      <li><i>Interview Project: Louis Colaianni</i></li>
                      <li><i>Vocal Combat:</i> D&apos;Arcy Smith</li>
                    </ul>
                  </td>
                </tr>
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


              {/* <p>I graduated Summa Cum Laude from Missouri State University with a BFA in Acting, an On-Camera Certificate, and a Criminology minor.
    Although I now live in New York I am still a proud Californian, born and raised in Davis, CA.
    I also have my Basic Actor-Combatant Certification from Fight Director’s Canada. 
    I have been lucky to fight direct student productions and assist in teaching combat for stage and screen to people ages 7 to 20.
    I got my start in acting because of school plays at a Waldorf school (an incredibly art-centric learning style) in sixth grade.
    My love and interest in stage combat probably started when I was eight and in Tae Kwon Do, thoroughly enjoying the opportunity to feel like a powerful badass.
  If I’m not acting or fighting, you can find me with a chai latte in hand testing a new baking recipe with my dog at my feet. </p> */}
