import React from "react";
import ReactDOM from "react-dom";
import App from './src/app'

const WEBCOMPONENT_TAG = "react-webcomponent-skeleton"

class WebComponentClass extends HTMLElement {
  mountPoint;

  connectedCallback() {
    this.mountReactApp()
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this.mountPoint)
  }

  mountReactApp() {
    if (!this.mountPoint) {
      this.mountPoint = document.createElement('div');
      this.attachShadow({ mode: 'open' }).appendChild(this.mountPoint);
    }

    ReactDOM.render(<App />, this.mountPoint);
  }
}

window.customElements.define(WEBCOMPONENT_TAG, WebComponentClass)
