import TodoList from "../../src/models/todoList.js"

describe("constructor", () => {
  //when passed nothing
  const todoList = new TodoList()
  it("should should have a default generic name", () => {
    expect(todoList.name).toEqual("Todo List #1") 
  })
})
