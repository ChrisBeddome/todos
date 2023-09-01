import Todo from "./todo.js"

export default class TodoList {
  #id;
  #name;
  #todos = [];

  constructor(options) {
    const requiredOptions = ["id", "name"];
    if (!options) {
      throw new Error(`options required: ${requiredOptions.join(", ")}`);
    }
    requiredOptions.forEach(opt => {
      if (options[opt] === null || options[opt] ===  undefined) {
        throw new Error(`${opt} required`);
      }
    })

    this.#id = options.id;
    this.#name = options.name

    if (options.todos) {
      if (!Array.isArray(options.todos)) {
        throw new Error("todos must be array");
      }
      options.todos.forEach(todo => {
        if (!(todo instanceof Todo)) {
          throw new Error("all todos must be of type todo");
        }
      })
    this.#todos = options.todos;
    }
  }
  
  render() {
    const ul = document.createElement("ul");
    ul.classList.add("todo-list");
    this.#todos.forEach(todo => {
      ul.appendChild(todo.render()); 
    })
    return ul;
  }
}
