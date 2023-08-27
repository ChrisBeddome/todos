import Todo from "../../src/views/todo.js"

const validOptions = {
  id: 1,
  completed: false,
  text: "test",
  createdAt: new Date()
}

describe("Todo View", () => {
  describe("constructor", () => {
    it("throws error when options does not conatain necessary values", () => {
      expect(() => new Todo()).toThrow();
      expect(() => new Todo({})).toThrow();
      expect(() => new Todo({id: 1})).toThrow();
    });
    it("succeeds when passed valid options", () => {
      expect(() => new Todo(validOptions)).not.toThrow();
    }); 
  });
  describe("render", () => {
    let todo;
    beforeEach(() => {
      todo = new Todo(validOptions);
    });
    it("should return an HTMLDivElement element", () => {
      expect(todo.render()).toBeInstanceOf(HTMLDivElement);
    });
    it("should have specific text content representing to todo data", () => {
      expect(todo.render().textContent).toEqual("test --- incomplete");
      expect(
        new Todo({...validOptions, text: "hello", completed: true})
          .render()
          .textContent
      )
        .toEqual("hello --- complete")
    });
  });
});
