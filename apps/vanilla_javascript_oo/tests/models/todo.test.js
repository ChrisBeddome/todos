import todo from "../../src/models/todo.js"

describe("Todo", () => {
  let todo;

  beforeEach(() => {
    todo = new Todo();
  });

  describe("constructor", () => {
    it("sets default text", () => {
      expect(todo.text).toBe("");
    });

    it("sets text when provided", () => {
      expect(new Todo("Go to the gym").text).toBe("Go to the gym");
    });

    it("throws error when given non-string value", () => {
      callWithNonStrings((val) => new Todo(val), 'toThrow');
    });
  });

  describe("defaults", () => {
    it("has default text and is incomplete", () => {
      expect(todo.text).toBe("");
      expect(todo.isComplete()).toBe(false);
    });
  });

  describe("text setter/getter", () => {
    it("can set and get text", () => {
      todo.text = "Buy groceries";
      expect(todo.text).toBe("Buy groceries");
    });

    it("throws error when passed non-string value", () => {
      callWithNonStrings((val) => todo.text = val, 'toThrow');
    });

  });

  describe("complete getter/setter", () => {
    it("can mark as complete and incomplete", () => {
      todo.markComplete();
      expect(todo.isComplete()).toBe(true);

      todo.markIncomplete();
      expect(todo.isComplete()).toBe(false);
    });
  });

  const callWithNonStrings = (fn, expectation) => {
    const nonStrings = [ 1, true, {a: 1}, [1,2,3], null];
    nonStrings.forEach(val => {
      expect(() => fn(val))[expectation]()
    });
  };

});
