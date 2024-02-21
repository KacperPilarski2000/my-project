import "./style.css";

const UnorderedList = ({ hideDone, removeTasks, tasks, toggleDone }) => (
  <ul className="ListItem__division">
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`listItem ${
          task.done && hideDone ? "listItem--hidden" : ""
        }`}
      >
        <button
          onClick={() => toggleDone(task.id)}
          className="listItem__checkButton"
        >
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`listItem__paragraph ${
            task.done ? "listItem__task--done" : ""
          }`}
        >
          {task.content}
        </span>
        <button
          className="listItem__button"
          onClick={() => removeTasks(task.id)}
        >
          🗑️
        </button>
      </li>
    ))}
  </ul>
);

export default UnorderedList;
