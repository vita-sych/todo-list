import './App.css';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(title) {
    if (!title) return;

    const isCompleted = false;

    const newTodo = {
      id: Date.now(),
      title: title,
      isCompleted: isCompleted,
    };

    setTodoList([...todoList, newTodo]);
  }

  function completeTodo(id) {
    const updatedTodos = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: true };
      } else return todo;
    });

    setTodoList([...updatedTodos]);
  }

  return (
    <div>
      <h1>To do list</h1>
      <TodoForm onAddTodo={addTodo}></TodoForm>
      {todoList.length > 0 ? (
        <TodoList todoList={todoList} onCompleteTodo={completeTodo}></TodoList>
      ) : (
        <p>Add todo above to get started</p>
      )}
    </div>
  );
}

export default App;
