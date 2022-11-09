import Todo from "../../src/models/todo.js"

describe("constructor", () => {
  //when passed nothing
  const todo = new Todo()
  it("should have empty text", () => {
    expect(todo.text).toEqual("") 
  })
})
