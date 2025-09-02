import { useState } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel';
function TodoListItem({ todo, onCompleteTodo, onUpdateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [workingTitle, updateWorkingTitle] = useState(todo.title);

  function handleCancel() {
    updateWorkingTitle(todo.title);
    setIsEditing(false);
  }

  function handleEdit(event) {
    updateWorkingTitle(event.target.value);
  }

  function handleUpdate(event) {
    if (!isEditing) return;

    event.preventDefault();

    onUpdateTodo({ ...todo, title: workingTitle });
    setIsEditing(false);
  }

  return (
    <li>
      <form onSubmit={handleUpdate}>
        {isEditing ? (
          <>
            <TextInputWithLabel
              value={workingTitle}
              onChange={handleEdit}
            ></TextInputWithLabel>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
            <button type="button" onClick={handleUpdate}>
              Update
            </button>
          </>
        ) : (
          <>
            <input
              id={`checkbox${todo.id}`}
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => onCompleteTodo(todo.id)}
            ></input>
            <span onClick={() => setIsEditing(true)}>{todo.title}</span>
          </>
        )}
      </form>
    </li>
  );
}

export default TodoListItem;
