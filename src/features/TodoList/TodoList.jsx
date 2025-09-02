import TodoListItem from './TodoListItem';

function TodoList({ todoList, onCompleteTodo, onUpdateTodo }) {
  const filteredTodoList = todoList.filter((todo) => !todo.isCompleted);

  return (
    <>
      {filteredTodoList.length > 0 ? (
        <ul>
          {filteredTodoList.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onCompleteTodo={onCompleteTodo}
              onUpdateTodo={onUpdateTodo}
            ></TodoListItem>
          ))}
        </ul>
      ) : (
        <p>Add todo above to get started</p>
      )}
    </>
  );
}

export default TodoList;
