class WordCount extends HTMLParagraphElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    console.log(this);
  }

  connectedCallback() {
    const count = this.#countWords(this.parentNode);

    const span = document.createElement("span");
    span.textContent = `Words = ` + count;

    this.shadow.append(span);
  }

  #countWords(node) {
    const text = node.innerText || node.textContent;
    return text
      .trim()
      .split(/\s+/g)
      .filter((a) => a.trim().length > 0).length;
  }
}

customElements.define("word-count", WordCount, { extends: "p" });
