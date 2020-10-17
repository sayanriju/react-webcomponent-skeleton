import React from "react"
import ReactDOM from "react-dom"
import App from "./src/app"
import style from "bundle-text:./src/style.css"


const WEBCOMPONENT_TAG = "react-webcomponent-skeleton"

class WebComponentClass extends HTMLElement {
  mountPoint
  style

  connectedCallback() {
    this.mountReactApp()
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint)
  }

  mountReactApp() {
    if (!this.mountPoint) {
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
