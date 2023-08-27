export default class Todo {
  #completed = false;
  #text = "";
  #createdAt = null;

  constructor(text = "") {
    if (typeof text !== "string") {
      throw new Error("text must be of type string");
    }
    this.#text = text;
    this.#createdAt = new Date();
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

  get createdAt() {
    return this.#createdAt;
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

