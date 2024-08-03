export default function TabButton({ children, componentOnClick }) {
  return (
    <li>
      <button onClick={componentOnClick}>{children}</button>
    </li>
  );
}
