import TodoListItem from './TodoListItem';

function TodoList({ todoList, onCompleteTodo }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onCompleteTodo={onCompleteTodo}
        ></TodoListItem>
      ))}
    </ul>
  );
}

export default TodoList;
