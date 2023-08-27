import TodoList from "../../src/models/todoList.js"
import Todo from "../../src/models/todo.js"

describe("TodoList", () => {
  let todoList;
  beforeEach(() => {
    todoList = new TodoList()
  });

  describe("constructor", () => {
    it("assigns generic name with incremented number when no name passed", () => {
      const count = todoList.name
      expect(todoList.name).toEqual("Todo List #1") 
      expect(new TodoList().name).toEqual("Todo List #2")
      expect(new TodoList().name).toEqual("Todo List #3")
    })
    it("assigns name when given string", () => {
      const name = "test"
      todoList = new TodoList(name);
      expect(todoList.name).toEqual(name)
    })
    it("throws error when given non-string value", () => {
      expect(() => new TodoList(null)).toThrow();
      expect(() => new TodoList(55)).toThrow();
      expect(() => new TodoList([1,2,3])).toThrow();
      expect(() => new TodoList({a: 1})).toThrow();
    }) 
    it("adds no todos when none given", () => {
      expect(todoList.todos).toEqual([])
    });
    it("adds todos when given as array", () => {
      todoList = new TodoList("test", [new Todo(), new Todo()])
      expect(todoList.todos.length).toEqual(2)
    });
    it("adds todos when given as args", () => {
      todoList = new TodoList("test", new Todo(), new Todo())
      expect(todoList.todos.length).toEqual(2)
    });
    it("throws error when passed non-todo", () => {
      expect(() => new TodoList("test", "this is not a todo", 55)).toThrow();
    });
  })

})
