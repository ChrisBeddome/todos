import Todo from "./models/todo.js"
import TodoList from "./models/todoList.js"
import TodoView from "./views/todo.js"

//for manual testing
window.Todo = Todo;
window.TodoList = TodoList;
window.TodoView = TodoView;

const list = new TodoList();

["test", "hello", "123"].forEach(text => {
  list.add(new Todo(text));
});

list.todos.forEach((todo => {
  const { isComplete, text, createdAt, id } = todo
  const el = new TodoView({ isComplete, text, createdAt, id }).render();
  document.querySelector("#app").appendChild(el);
}));


