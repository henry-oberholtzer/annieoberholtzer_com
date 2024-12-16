import { Header, Logo, NavigationButton, NavigationGroup } from ".."

export default function NavBar({ routes }: NavBarProps) {
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
