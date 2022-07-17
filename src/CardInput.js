import { LitElement, html, css } from 'lit';

export class CardInput extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
    .borde-negro {
      border: solid 1px black;
    }
    
    .p-2 {
      padding: 2px;
    }

    .flex {
      display: flex;
    }

    .flex-center {
      justify-content: center;
      align-items: center;
    }

    .flex-col {
      flex-direction: column;
    }

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 1rem;
    }

    .w-100 {
      width: 100vw;
    }

    .h-100 {
      height: 100vh;
    }

    .back-card {
      width: 260px;
      height: 70px;
      background-color: #FFF2CC;
      border: solid 2px #D6B656;
      border-radius: 12px;
      transform: translateX(-18px) translateY(55px) rotate(5deg);
      z-index: 1;
    }

    .button-next {
      background-color: #FFF2CC;
      border: solid 2px #D6B656;
      border-radius: 5px;
      margin-left: -20px;
    }

    .front-card {
      width: 275px;
      background-color: #fff;
      border: solid 2px lightgrey;
      border-radius: 12px;
    }

    .z-2 {
      z-index: 2;
    }

    input {
      padding: 0.5rem;
      text-align: center;
    }

    .title {
      margin-bottom: .5rem;
    }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
    <main class="flex flex-center w-100 h-100 flex-col">
      <div class="borde-negro p-2 back-card">
      </div>
      <div class="borde-negro p-2 z-2 front-card">
        <div class="content">
          <label class="title" for="currentInput">¿Cómo se llama el proyecto?</label>
          <div>
            <input type="text" placeholder="Nombre del proyecto" id="currentInput">
            <button class="button-next">➤</button>
          </div>
        </div>
      </div>
    </main>
    `;
  }
}
