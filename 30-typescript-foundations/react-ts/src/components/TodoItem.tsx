import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ todo: Todo }> = (props) => {
  return <li className={classes.item}>{props.todo.text}</li>;
};

export default TodoItem;
