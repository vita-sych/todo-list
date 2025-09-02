import './App.css';
import TodoList from './features/TodoList/TodoList.jsx';
import TodoForm from './features/TodoForm.jsx';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(title) {
    if (!title) return;

    const newTodo = {
      id: Date.now(),
      title: title,
      isCompleted: false,
    };

    setTodoList([...todoList, newTodo]);
  }

  function completeTodo(id) {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: true };
      } else return todo;
    });

    setTodoList(updatedTodos);
  }

  return (
    <div>
      <h1>To do list</h1>
      <TodoForm onAddTodo={addTodo}></TodoForm>
      <TodoList todoList={todoList} onCompleteTodo={completeTodo}></TodoList>
    </div>
  );
}

export default App;
