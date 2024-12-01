export default function TabButton({ children, isSelected, ...props }) {
  //react is more declarative than imperitive code.
  //naming starting with on is a convention used to name props that should recieve a function that will be triggered upon an event
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
}
