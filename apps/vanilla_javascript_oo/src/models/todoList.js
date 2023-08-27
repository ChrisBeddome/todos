import Todo from "../../src/models/todo.js"

export default class TodoList {
  static #count = 0;
  #name = "";
  #todos = [];

  constructor(name = "", ...args) {
    if (typeof name !== "string") {
      throw new Error("text must be of type string");
    } else if (name) {
      this.#name = name;
    } else {
      this.#name = `Todo List #${++TodoList.#count}`;
    }
    args.flat().forEach(todo => {
      this.add(todo);
    });
  }

  get name() {
    return this.#name
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
