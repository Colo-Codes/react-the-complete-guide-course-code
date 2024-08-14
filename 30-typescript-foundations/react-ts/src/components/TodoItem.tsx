import Todo from "../models/todo";

const TodoItem: React.FC<{ todo: Todo }> = (props) => {
  return <li key={props.todo.id}>{props.todo.text}</li>;
};

export default TodoItem;
