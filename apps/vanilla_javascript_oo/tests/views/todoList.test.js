import TodoList from "../../src/views/todoList.js"
import Todo from "../../src/views/todo.js"

const validTodoOptions = {
  id: 1,
  isComplete: false,
  text: "test",
}

const validOptions = {
  id: 1,
  name: "list1",
}

const validOptionsWithTodos = {
  ...validOptions,
  todos: [new Todo(validTodoOptions), new Todo(validTodoOptions)]
}


describe("TodoList View", () => {
  describe("constructor", () => {
    it("throws error when options does not conatain necessary values", () => {
      expect(() => new TodoList()).toThrow();
      expect(() => new TodoList({})).toThrow();
      expect(() => new TodoList({id: 1})).toThrow();
    });
    it("throws eror when options.todos is not array", () => {
      expect(() => new TodoList({...validOptions, todos: 5})).toThrow();
    });
    it("throws eror when options.todos contains non-todos", () => {
      expect(() => new TodoList({...validOptions, todos: [new Todo(validTodoOptions), 3, 4]})).toThrow();
    });
    it("succeeds when passed valid options", () => {
      expect(() => new TodoList(validOptions)).not.toThrow();
    }); 
    it("succeeds when passed valid options and todos", () => {
      expect(() => new TodoList(validOptionsWithTodos)).not.toThrow();
    }); 
  });
  describe("render", () => {
    let todoList;
    beforeEach(() => {
      todoList = new TodoList(validOptions);
    });
    it("should return an HTMLUListElement element", () => {
      expect(todoList.render()).toBeInstanceOf(HTMLUListElement);
    });
    it("should have 0 nested todos when not passed todos", () => {
      const todoListEl = todoList.render();
      expect(todoListEl.querySelectorAll(".todo").length).toEqual(0)
    });
    it("should have 2 nested todos when not passed todos", () => {
      todoList = new TodoList(validOptionsWithTodos);
      const todoListEl = todoList.render();
      expect(todoListEl.querySelectorAll(".todo").length).toEqual(2)
    });
  });
});
