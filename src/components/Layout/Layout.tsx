import NavBar from "../NavBar/NavBar";
import { LayoutProps } from "./types";

export default function Layout({ children, routes }: LayoutProps) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='90' font-size='90'>⚔️</text></svg>"
      />
      <body className={`${vollkorn.className}`}>
        <NavBar routes={routes} />
          {children}
        <footer>
          <h3>
            (c) Annie Oberholtzer 2024
          </h3>
        </footer>
      </body>
    </html>
  )
}
