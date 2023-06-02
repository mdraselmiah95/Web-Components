class MyButton extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const button = `
   <button>${this.innerHTML}</button>`;
    this.innerHTML = button;
  }

  attributeChangedCallBack() {}

  disconnectedCallback() {}
}

customElements.define("my-element", MyButton);
