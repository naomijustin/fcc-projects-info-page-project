import React from "react"
import logo from "./logo.svg"

function Header() {
    return(
      <header>
          <nav>
            <img src={logo} className="imgLogo"></img>
            <ul className="nav-items">
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
    )
  }

  export default Header