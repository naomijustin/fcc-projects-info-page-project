import React from "react"
import ReactDOM from "react-dom/client"
import logo from "./logo.svg"
import style from "./index.css"
/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/

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

function Footer() {
  return (
    <footer>
      &emsp;&#169;<small>2023 Zippurah development. All rights reserved.</small>
    </footer>
  )
}

function Content() {
  return (
    <div className="mainContent">
      <h1>React info</h1>
      <ol>
        <li>Learn new technology</li>
        <li>Upskill</li>
      </ol>
    </div>
  )
}

function Page() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Page />);