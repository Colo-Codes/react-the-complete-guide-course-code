import Todo from "../models/todo";
import TodoItem from "./TodoItem";

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
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem todo={item} />
      ))}
    </ul>
  );
};

export default Todos;
