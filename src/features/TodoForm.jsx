import { useRef } from 'react';
import { useState } from 'react';

function TodoForm({ onAddTodo }) {
  const todoTitle = 'Todo';
  const todoTitleInput = useRef('');
  const [workingTodoTitle, setWorkingTodoTitle] = useState('');

  function handleAddTodo(event) {
    event.preventDefault();

    onAddTodo(workingTodoTitle);
    setWorkingTodoTitle('');

    todoTitleInput.current.focus();
  }

  return (
    <form onSubmit={handleAddTodo}>
      <label htmlFor={todoTitle}>Todo</label>
      <input
        id={todoTitle}
        ref={todoTitleInput}
        value={workingTodoTitle}
        onChange={(event) => setWorkingTodoTitle(event.target.value)}
        type="text"
        name="title"
      ></input>
      <button disabled={workingTodoTitle === ''}>Add Todo</button>
    </form>
  );
}

export default TodoForm;
