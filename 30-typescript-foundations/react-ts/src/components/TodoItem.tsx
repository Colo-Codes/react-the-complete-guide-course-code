import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{ todo: Todo; onDelete: (id: string) => void }> = (
  props
) => {
  return (
    <>
      <li className={classes.item}>
        <span>{props.todo.text}</span>
        <span
          className={classes.deleteButton}
          onClick={() => props.onDelete(props.todo.id)}
        >
          ❌
        </span>
      </li>
    </>
  );
};

export default TodoItem;
