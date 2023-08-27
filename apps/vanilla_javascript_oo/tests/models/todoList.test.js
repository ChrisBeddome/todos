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
      expect(todoList.name).toBe("Todo List #1") 
      expect(new TodoList().name).toBe("Todo List #2")
      expect(new TodoList().name).toBe("Todo List #3")
    })
    it("assigns name when given string", () => {
      const name = "test"
      todoList = new TodoList(name);
      expect(todoList.name).toBe(name)
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
      expect(todoList.todos.length).toBe(2)
    });
    it("adds todos when given as args", () => {
      todoList = new TodoList("test", new Todo(), new Todo())
      expect(todoList.todos.length).toBe(2)
    });
    it("throws error when passed non-todo", () => {
      expect(() => new TodoList("test", "this is not a todo", 55)).toThrow();
    });
  })

  describe("add", () => {
    it ("should add todo when given todo", () => {
      expect(todoList.todos.length).toBe(0);
      const todo = new Todo();
      todoList.add(todo);
      expect(todoList.todos.length).toBe(1)
      expect(todoList.todos[0]).toBe(todo);
    });
    it("adds todos when given as array", () => {
      todoList.add([new Todo(), new Todo()])
      expect(todoList.todos.length).toBe(2)
    });
    it("adds todos when given as args", () => {
      todoList.add(new Todo(), new Todo())
      expect(todoList.todos.length).toBe(2)
    });
    it ("should throw error when given non-todo", () => {
      expect(() => todoList.add(null)).toThrow()
      expect(() => todoList.add()).toThrow()
      expect(() => todoList.add("55")).toThrow()
      expect(() => todoList.add(55)).toThrow()
    });
  });

  describe("remove", () => {
    let todo1;
    let todo2;
    beforeEach(() => {
      todo1 = new Todo();
      todo2 = new Todo();
      todoList.add(todo1);
      todoList.add(todo2);
    });
   
    it ("should remove todo when given todo", () => {
      expect(todoList.todos.length).toBe(2);
      todoList.remove(todo1); 
      expect(todoList.todos.length).toBe(1);
      expect(todoList.todos[0]).toBe(todo2);
    })
    it("removes todos when given as array", () => {
      todoList.remove([todo1, todo2]);
      expect(todoList.todos.length).toBe(0)
    });
    it("removes todos when given as args", () => {
      todoList.remove(todo1, todo2);
      expect(todoList.todos.length).toBe(0)
    });
    it ("should throw error when given non-todo", () => {
      expect(() => todoList.remove(null)).toThrow()
      expect(() => todoList.remove()).toThrow()
      expect(() => todoList.remove("55")).toThrow()
      expect(() => todoList.remove(55)).toThrow()
    });
    it ("should throw error when given todo not in list", () => {
      expect(() => todoList.remove(new Todo())).toThrow()
    });
  });

  describe("length", () => {
    const assertLengthMatches = todoList => {
      expect(todoList.length).toEqual(todoList.todos.length);
    };
    it("should return same value as todos.length", () => {
      assertLengthMatches(todoList);
      const todo = new Todo();
      todoList.add(todo);
      assertLengthMatches(todoList);
      todoList.remove(todo);
      assertLengthMatches(todoList);
    })
  });

})
