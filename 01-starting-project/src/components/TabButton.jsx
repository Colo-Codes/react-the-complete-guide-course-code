export default function TabButton({ children, componentOnClick, isSelected }) {
  return (
    <li>
      <button
        className={isSelected ? "active" : null}
        onClick={componentOnClick}
      >
        {children}
      </button>
    </li>
  );
}
