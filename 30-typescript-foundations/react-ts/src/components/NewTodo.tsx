import { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  const todoTextInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // const enteredText = todoTextInput.current?.value
    const enteredText = todoTextInput.current!.value;

    if (enteredText.trim().length === 0) {
      // Throw error
      return;
    }

    todosCtx.onAddTodo(enteredText);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor="todo">Todo text</label>
      <input type="text" name="" id="todo" ref={todoTextInput} />
      <button>Add ToDo</button>
    </form>
  );
};

export default NewTodo;
