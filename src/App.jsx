import './App.css';
import TodoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';

function App() {
  const initialValue = 'Example Text';
  const [newTodo, setNewTodo] = useState(initialValue);

  return (
    <div>
      <h1>To do list</h1>
      <TodoForm></TodoForm>
      <p>{newTodo}</p>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
