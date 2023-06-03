const template = document.createElement("template");
template.innerHTML = `
<style>
    div {
        display:flex;
        gap:1rem:
        align-items:center;
        padding: 1rem;
        border: 1px solid gray;
        margin-bottom:1rem
    }
    label {
        font-family:Arial;
        color:green;
        font-weight:700;
    }
    span {
        margin-left:auto;
    }
</style>
<div>
    <input type="checkbox"/>
    <Label>
        <slot></slot>
    </label>
    <span>
        <slot name="small"></slot>
    </span>
</div>
`;

class TodoItem extends HTMLElement {
  constructor() {
    super();
    // this.shadow = null;
    // this.checkbox = null;
    this.shadow = this.attachShadow({ mode: "open" });
    this.shadow.append(template.content.cloneNode(true));
    this.checkbox = this.shadow.querySelector("input");
  }

  connectedCallback() {}

  static get observedAttributes() {
    return ["checked"];
  }

  attributeChangedCallback(name, _oldValue, newValue) {
    if (name === "checked") {
      this.#updateChecked(newValue);
    }
  }

  #updateChecked(value) {
    this.checkbox.checked = value === "true" ? true : false;
  }
}

customElements.define("todo-item", TodoItem);
