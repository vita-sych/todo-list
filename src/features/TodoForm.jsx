import { useRef } from 'react';
import { useState } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel';

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
      <TextInputWithLabel
        id={todoTitle}
        ref={todoTitleInput}
        value={workingTodoTitle}
        onChange={(event) => setWorkingTodoTitle(event.target.value)}
        labelText={todoTitle}
      ></TextInputWithLabel>
      <button disabled={workingTodoTitle === ''}>Add Todo</button>
    </form>
  );
}

export default TodoForm;
