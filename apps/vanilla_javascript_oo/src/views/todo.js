export default class Todo {
  #id;
  #isComplete;
  #text;

  constructor(options) {
    const requiredOptions = ["id", "isComplete", "text"];
    if (!options) {
      throw new Error(`options required: ${requiredOptions.join(", ")}`);
    }
    requiredOptions.forEach(opt => {
      if (options[opt] === null || options[opt] ===  undefined) {
        throw new Error(`${opt} required`);
      }
    })
    this.#id = options.id;
    this.#isComplete = options.isComplete;
    this.#text = options.text;
  }
  
  render() {
    const li = document.createElement("li");
    li.classList.add("todo");
    const content = `${this.#text} --- ${this.#isComplete ? "complete" : "incomplete"}`;
    li.textContent = content;
    return li;
  }
}
