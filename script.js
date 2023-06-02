class MyButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    console.log("i am connected");
    console.log("Inner HTML", this.innerHTML);
  }

  attributeChangedCallBack() {}

  disconnectedCallback() {}
}

customElements.define("my-element", MyButton);
