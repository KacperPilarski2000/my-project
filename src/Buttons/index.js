import "./style.css";
import React from "react";

const Buttons = ({ tasks, hideDoneTasks, React }) => (
  <div>
    {tasks.length > 0 && (
      <>
        <button className="buttons">
          {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button className="buttons" disabled={tasks?.every(({ done }) => done)}>
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);
export default Buttons;
