export default class EventEmitter {
  #events = {}

  on(eventName, fn) {
    if( typeof eventName !== "string") {
      throw new Error("event name must be of type string");
    }
    if( typeof fn !== "function") {
      throw new Error("fn must be of type function");
    }
    if (this.#events[eventName]) {
      this.#events[eventName].push(fn);
    } else {
      this.#events[eventName] = [fn];
    }
  }

  off(eventName, fnToRemove) {
    if( typeof eventName !== "string") {
      throw new Error("event name must be of type string");
    }
    if( typeof fnToRemove !== "function") {
      throw new Error("fn must be of type function");
    }
    if (this.#events[eventName]) {
      this.#events[eventName] = this.#events[eventName].filter(fn => fn !== fnToRemove);
    }
  }

  _emit(eventName) {
    if (Array.isArray(this.#events[eventName])) {
      this.#events[eventName].forEach(fn => fn()); 
    }
  }
}
