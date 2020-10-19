import React from "react"
import ReactDOM from "react-dom"
import App from "./src/app"
import style from "bundle-text:./src/style.css"

function addExternalStylesheet(url) {
  const link = document.createElement("link")
  link.rel = "stylesheet"
  link.type = "text/css"
  link.href = url
  document.head.appendChild(link)
}


const WEBCOMPONENT_TAG = "react-webcomponent-skeleton"
const EXTERNAL_STYLESHEETS = [
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
  "https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"
]

class WebComponentClass extends HTMLElement {
  mountPoint
  style

  connectedCallback() {
    EXTERNAL_STYLESHEETS.forEach(addExternalStylesheet)
    this.mountReactApp()
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint)
  }

  mountReactApp() {
    if (!this.mountPoint) {
      // addExternalStylesheet(document, "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css")

      const shadow = this.attachShadow({ mode: "open" })

      this.style = document.createElement("style")
      this.mountPoint = document.createElement("div")

      this.style.textContent = style

      shadow.appendChild(this.style)
      shadow.appendChild(this.mountPoint)
    }

    ReactDOM.render(<App />, this.mountPoint)
  }
}

window.customElements.define(WEBCOMPONENT_TAG, WebComponentClass)
