import "./App.css";
import Form from "./Form";
import UnorderedList from "./UnorderedList";
import Buttons from "./Buttons";
import {Division} from "./Division";
import Header from "./Header";
import Main from "./Main";
import React from "react";
const tasks = [
  { id: 1, content: "Umyć okna", done: false },
  { id: 2, content: "Zrobić sernik", done: true },
];

const hideDoneTask = true;

function App() {
  return (
    <Main>
      <section className="section">
        <Header title="Lista zadań" />
        <Division title="Dodaj nowe zadanie" content={<Form />} />
        <Division
          title="Lista zadań"
          extraContent={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} />}
          content={<UnorderedList tasks={tasks} hideDoneTask={hideDoneTask} />}
        />
      </section>
    </Main>
  );
}

export default App;
