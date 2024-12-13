import type { NextPageWithLayout } from "./_app"
import Layout from "@/components/Layout/Layout"
import type { ReactElement } from "react"

const About: NextPageWithLayout = () => {
  return (
    <p>Placeholder for About Page</p>
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
