import { LitElement, html, css } from 'lit';
import './card-input.js'

export class ReadmeCreator extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
    :host {
        min-height: 100vh;
      }

    
    `;
  }

  constructor() {
    super();
    this.title = 'Readme Creator Online';
  }

  render() {
    return html`
    <card-input></card-input>
    `;
  }
}
