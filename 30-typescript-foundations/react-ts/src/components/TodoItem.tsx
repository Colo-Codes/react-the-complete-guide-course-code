import Todo from "../models/todo";

const TodoItem: React.FC<{ todo: Todo }> = (props) => {
  return <li>{props.todo.text}</li>;
};

export default TodoItem;
