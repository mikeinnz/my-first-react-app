const TodoHeader = () => {
  return (
    <thead>
      <tr>
        <th>Done</th>
        <th>Todo</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
};

const Todos = (props) => {
  const todoList = props.todoList.map((todo, index) => {
    return (
      <tr key={index}>
        <td>
          <input
            type="checkbox"
            name="status"
            checked={todo.status}
            onChange={() => props.handleTick(todo)}
          />
        </td>
        <td onClick={() => props.handleTick(todo)}>{todo.task}</td>
        <td>
          <button
            className="btn btn-danger m-2"
            onClick={() => props.handleDelete(index)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <table>
      <TodoHeader />
      <tbody>{todoList}</tbody>
    </table>
  );
};

export default Todos;
