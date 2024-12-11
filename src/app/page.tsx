import { Logo, NavigationButton, NavigationGroup, Slideshow, Header, Container } from "@/components";
import placeholder from './media/images/placeholder.jpg'
import { SlideshowSlide } from "@/components/Slideshow/types";

const routes: NavigationButton[] = [
  {
    name: "About",
    to: "",
  },
  {
    name: "Media",
    to: "",
  },
  {
    name: "Contact",
    to: "",
  }
]

const slideshowContents: SlideshowSlide[] = [
  {
    imageURL: placeholder,
    altText: "This is placeholder text",
    textOverlay: `I’m Annie Oberholtzer. I graduated Summa Cum Laude from Missouri State University with a BFA in Acting, an On-Camera Certificate, and a Criminology minor.
    Although I now live in New York I am still a proud Californian, born and raised in Davis, CA.
    I also have my Basic Actor-Combatant Certification from Fight Director’s Canada. 
    I have been lucky to fight direct student productions and assist in teaching combat for stage and screen to people ages 7 to 20.
    I got my start in acting because of school plays at a Waldorf school (an incredibly art-centric learning style) in sixth grade.
    My love and interest in stage combat probably started when I was eight and in Tae Kwon Do, thoroughly enjoying the opportunity to feel like a powerful badass.
    If I’m not acting or fighting, you can find me with a chai latte in hand testing a new baking recipe with my dog at my feet. `
  },
  {
    imageURL: placeholder,
    altText: "This is placeholder text",
    textOverlay: `I’m Annie Oberholtzer. I graduated Summa Cum Laude from Missouri State University with a BFA in Acting, an On-Camera Certificate, and a Criminology minor.
    Although I now live in New York I am still a proud Californian, born and raised in Davis, CA.
    I also have my Basic Actor-Combatant Certification from Fight Director’s Canada. 
    I have been lucky to fight direct student productions and assist in teaching combat for stage and screen to people ages 7 to 20.
    I got my start in acting because of school plays at a Waldorf school (an incredibly art-centric learning style) in sixth grade.
    My love and interest in stage combat probably started when I was eight and in Tae Kwon Do, thoroughly enjoying the opportunity to feel like a powerful badass.
    If I’m not acting or fighting, you can find me with a chai latte in hand testing a new baking recipe with my dog at my feet. `
  }
]

export default function Home() {
  return (
    <>
      <Header>
        <Logo />
        <NavigationGroup>
          {routes.map((button, i) => {
            return (
              <NavigationButton key={i} props={button} />
            )
          })}
        </NavigationGroup>
      </Header>
      <Container>
          <Slideshow props={slideshowContents}/>
          {/* <p>
          </p> */}
      </Container>
      <footer>
        <h3>
          (c) Annie Oberholtzer 2024
        </h3>
      </footer>
    </>
  );
}
