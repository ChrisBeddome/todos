export default class Todo {
  #completed = false;
  #text = "";

  constructor(text = "") {
    if (typeof text !== "string") {
      throw new Error("text must be of type string");
    }
    this.#text = text;
  }

  get text() {
    return this.#text;
  }

  set text(text = "") {
    if (typeof text !== "string") {
      throw new Error("text must be of type string");
    }
    this.#text = text
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

