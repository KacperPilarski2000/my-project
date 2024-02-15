import "./style.css";

const onDelete = () => console.log("Kliknięto w koszyk");

const UnorderedList = (props) => (
  <ul className="ListItem__division">
    {props.tasks.map((task) => (
      <li
        key={task.id}
        className={`listItem ${
          task.done && props.hideDones ? "listItem--hidden" : ""
        }`}
      >
        <button className="listItem__checkButton">
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`listItem__paragraph ${
            task.done ? "listItem__task--done" : ""
          }`}
        >
          {task.content}
        </span>
        <button className="listItem__button" onClick={onDelete}>🗑️</button>
      </li>
    ))}
  </ul>
);

export default UnorderedList;
