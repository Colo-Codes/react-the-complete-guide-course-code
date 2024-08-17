import { useContext } from "react";

import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

// Initial, cumbersome approach:
// export default function Todos(props: { items: string[]; children: any }) {
//   return (
//     <ul>
//       {
//         // ...
//       }
//     </ul>
//   );
// }

// Better approach: Function Component (FC) generic type for TypeScript.
// Here we 'use' the generic type (we don't 'define' it, because it's already defined in the React.FC type).
// Whatever object we pass tot he React.FC type will be merged with the props.children element.
// If we need an element to be optional, we can add a question mark to it: `{ items?: string[] }`.
// const Todos: React.FC<{ items: string[] }> = (props) => {
// We can use the class name as a type.
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem key={item.id} todo={item} onDelete={todosCtx.onDelete} />
      ))}
    </ul>
  );
};

export default Todos;
