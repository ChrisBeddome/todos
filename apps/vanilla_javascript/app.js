class Todo {
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

class TodoList {
  static #count = 0;
  #name = "";
  #todos = [];

  constructor(name = "", ...args) {
    if (name) {
      this.#name = name.toString();
    } else {
      this.#name = `Todo List #${++TodoList.#count}`;
    }
    args.flat().forEach(todo => {
      this.add(todo);
    });
  }

  get todos() {
    return this.#todos;
  }

  add(todo) {
    if (todo instanceof Todo)  {
      this.#todos = [...this.#todos, todo];
    } else {
      throw "argument must be instance of Todo"
    }
  }
}
