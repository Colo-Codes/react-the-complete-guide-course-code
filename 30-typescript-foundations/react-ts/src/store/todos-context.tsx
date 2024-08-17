import { createContext, useState } from "react";

import Todo from "../models/todo";

interface TodosContextObject {
  items: Todo[];
  onAddTodo: (text: string) => void;
  onDelete: (id: string) => void;
}

export const TodosContext = createContext<TodosContextObject>({
  items: [],
  onAddTodo: () => {},
  onDelete: () => {},
});

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const handleDelete = (id: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== id);
    });
  };

  const contextValue = {
    items: todos,
    onAddTodo: handleAddTodo,
    onDelete: handleDelete,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
