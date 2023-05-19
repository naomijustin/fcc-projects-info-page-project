import React from "react"
import ReactDOM from "react-dom/client"
import style from "./index.css"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

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