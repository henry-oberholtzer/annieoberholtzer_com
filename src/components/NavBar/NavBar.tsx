import { Header, Logo, NavigationButton, NavigationGroup } from ".."


const routes: NavigationButton[] = [
  {
    name: "About",
    to: "about",
  },
  {
    name: "Resume",
    to: "resume",
  },
  {
    name: "Media",
    to: "media",
  },
  {
    name: "Contact",
    to: "contact",
  }
]

export default function NavBar() {
  return (
    <Header>
      <Logo />
      <div>
      </div>
      <NavigationGroup routes={routes} />
    </Header>
  )
}
