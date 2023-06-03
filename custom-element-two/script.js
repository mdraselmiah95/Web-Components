const template = document.createElement("template");
template.innerHTML = `
<style></style>
<Label>
    <input type="checkbox"/>
    Hello World
</label>
`;

class TodoItem extends HTMLElement {
  constructor() {
    super();
    this.shadow = null;
    this.checkbox = null;
  }

  connectedCallback() {
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.append(template.content.cloneNode(true));
  }

  attributeChangedCallback() {}
}

customElements.define("todo-item", TodoItem);
