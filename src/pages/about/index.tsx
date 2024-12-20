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
import { NavigationButton } from "@/components";
import { SlideshowSlide } from "@/components/Slideshow/types";

const images: SlideshowSlide[] = [
  {
    imageURL: headshot_1,
    altText: "Annie Oberholtzer Headshot",
  },
  {
    imageURL: headshot_2,
    altText: "Annie Oberholtzer Headshot"
  },
  {
    imageURL: headshot_3,
    altText: "Annie Oberholtzer Headshot"
  },
  {
    imageURL: headshot_4,
    altText: "Annie Oberholtzer Headshot"
  }
]

const About: NextPageWithLayout = () => {
  return (
    <div className={styles.resume}>
      <section>
        <Swiper
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          modules={[Pagination]}
          pagination={{
            dynamicBullets: true,
            clickable: true
          }}
          >
          <SwiperSlide>
            <Image 
              src={headshot_1} 
              width={300}
              alt="Annie Oberholtzer Headshot" 
              className={styles.headshot} />
          </SwiperSlide>
        </Swiper>
      </section>
      <section>
        Height: 5'3" | Hair: Brown | Eyes: Brown
      </section>
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
        </tbody>
      </table>
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
    <hr />
    <section>
      <table>
        <caption>Education:</caption>
        <thead>
          <td>Focus</td>
          <td>Classes</td>
        </thead>
        <tbody>
          <tr>
            <td>Bachelor of Fine Arts - On Camera Certificate - Missouri State University</td>
          </tr>
          <br />
          <tr>
            <th scope="row">Acting:</th>
            <td>
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
            <th scope="row">Stage Combat:
            </th>
            <td>
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
            <td>
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
    </section>
    <div>
        <NavigationButton props={{
          name: "Download Resume",
          to: "/download"
        }} />
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
