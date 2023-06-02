class WordCount extends HTMLParagraphElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    console.log(this);
  }

  customElements() {
    const span = document.createElement("span");
    span.textContent = `Words = `;

    this.shadow.append(span);
  }
}

customElements.define("word-count", WordCount, { extends: "p" });
