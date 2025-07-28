function TodoForm() {
  const todoTitle = 'Todo';

  return (
    <form>
      <label htmlFor={todoTitle}>Todo</label>
      <input id={todoTitle}></input>
      <button>Add Todo</button>
    </form>
  );
}

export default TodoForm;
