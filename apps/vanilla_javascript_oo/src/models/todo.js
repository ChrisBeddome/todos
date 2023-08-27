export default class Todo {
  #id = Math.floor((Math.random() * 99999999999999)) //good enough for our purposes
  #completed = false;
  #text = "";
  #createdAt = new Date();

  constructor(text = "") {
    if (typeof text !== "string") {
      throw new Error("text must be of type string");
    }
    this.#text = text;
  }

  get id() {
    return this.#id;
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

