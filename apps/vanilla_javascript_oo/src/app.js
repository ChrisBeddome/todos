import Todo from "./models/todo.js"
import TodoList from "./models/todoList.js"
import TodoView from "./views/todo.js"
import TodoListView from "./views/todoList.js"

//for manual testing
window.Todo = Todo;
window.TodoList = TodoList;
window.TodoView = TodoView;
window.TodoListView = TodoListView;

const list = new TodoList();

["test", "hello", "123"].forEach(text => {
  list.add(new Todo(text));
});

list.todos.forEach((todo => {
  const { isComplete, text, id } = todo
  const el = new TodoView({ isComplete, text, id }).render();
  document.querySelector("#app").appendChild(el);
}));


