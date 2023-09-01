import Todo from "../../src/models/todo.js"

export default class TodoList {
  static #count = 0;
  #id = Math.floor((Math.random() * 99999999999999)); //good enough for our purposes
  #name = "";
  #todos = [];
  #createdAt = new Date();

  constructor(name = "", ...todos) {
    if (typeof name !== "string") {
      throw new Error("text must be of type string");
    } else if (name) {
      this.#name = name;
    } else {
      this.#name = `Todo List #${++TodoList.#count}`;
    }
    this.add(todos);
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get todos() {
    return this.#todos;
  }

  get createdAt() {
    return this.#createdAt;
  }

  get length() {
    return this.#todos.length;
  }

  add(...todos) {
    if (todos.length < 1 ) {
      throw new Error("argument must be instance of Todo");
    }
    todos.flat(Infinity).forEach(todo => {
      if (this.#isTodo(todo))  {
        this.#todos = [...this.#todos, todo];
      } else {
        throw new Error("argument must be instance of Todo");
      }
    });
  }

  remove(...todosToRemove) {
    if (todosToRemove.length < 1 ) {
      throw new Error("argument must be instance of Todo");
    }
    todosToRemove.flat(Infinity).forEach(todoToRemove => {
      if (!this.#isTodo(todoToRemove)) {
        throw new Error("argument must be instance of Todo");
      }
      const lengthBefore = this.length;
      this.#todos = this.#todos.filter(todo => todo.id !== todoToRemove.id);
      if (this.length === lengthBefore) {
        throw new Error("todo not found");
      }
    });
  }

  #isTodo(val) {
    return val instanceof Todo
  }
}
