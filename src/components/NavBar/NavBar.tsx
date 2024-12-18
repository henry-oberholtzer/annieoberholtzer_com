import { Header, Logo, NavigationButton, NavigationGroup } from ".."


const routes: NavigationButton[] = [
  {
    name: "About",
    to: "about",
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
      <NavigationGroup>
        {routes.map((button, i) => {
          return (
            <NavigationButton key={i} props={button} />
          )
        })}
      </NavigationGroup>
    </Header>
  )
}
