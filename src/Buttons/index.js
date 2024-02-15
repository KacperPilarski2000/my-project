import "./style.css";
import React from "react";

const Buttons = ({ tasks, hideDones, React }) => (
  <div>
    {tasks.length > 0 && (
      <>
        <button className="buttons">
          {hideDones ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button className="buttons" disabled={tasks?.every(({ done }) => done)}>
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);
export default Buttons;
