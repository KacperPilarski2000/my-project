import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
  <div>
    {tasks.length > 0 && (
      <>
        <button onClick={toggleHideDone} className="buttons">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button className="buttons" disabled={tasks?.every(({ done }) => done)}>
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);
export default Buttons;
