import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import UnorderedList from "./UnorderedList";
import Buttons from "./Buttons";
import { Division } from "./Division";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Umyć okna", done: false },
    { id: 2, content: "Zrobić sernik", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTasks = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleDone = (id) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  return (
    <Main>
      <section className="section">
        <Header title="Lista zadań" />
        <Division title="Dodaj nowe zadanie" content={<Form />} />
        <Division
          title="Lista zadań"
          content={
            <UnorderedList
              tasks={tasks}
              hideDone={hideDone}
              toggleDone={toggleDone}
              removeTasks={removeTasks}
            />
          }
          extraContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
            />
          }
        />
      </section>
    </Main>
  );
}

export default App;
