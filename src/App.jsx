import './App.css';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';

function App() {
  const initialValue = [];
  const [todoList, setTodoList] = useState(initialValue);

  function addTodo(title) {
    const newTodo = {
      id: Date.now(),
      title: title,
    };

    setTodoList([...todoList, newTodo]);

    console.log(JSON.stringify(newTodo));
  }

  return (
    <div>
      <h1>To do list</h1>
      <TodoForm onAddTodo={addTodo}></TodoForm>

      <TodoList></TodoList>
    </div>
  );
}

export default App;
