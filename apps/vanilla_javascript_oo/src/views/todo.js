export default class Todo {
  #id;
  #isComplete;
  #text;
  #createdAt;

  constructor(options) {
    const requiredOptions = ["id", "isComplete", "text", "createdAt"];
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
    this.createdAt = options.createdAt;
  }
  
  render() {
    const container = document.createElement("div");
    const content = `${this.#text} --- ${this.#isComplete ? "complete" : "incomplete"}`;
    container.textContent = content;
    return container;
  }
}
