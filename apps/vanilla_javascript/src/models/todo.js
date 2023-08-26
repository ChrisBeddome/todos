export default class Todo {
  #completed = false;
  #text = "";

  constructor(text = "") {
    this.#text = text.toString();
  }

  get text() {
    return this.#text;
  }

  set text(text = "") {
    this.#text = text.toString();
  }

  isComplete() {
    return this.#completed;
  }

  markComplete() {
    this.#completed = true;
  }

  markIncomplete() {
    this.#completed = false;
  }

  toString() {
    return this.#text;
  }
}

