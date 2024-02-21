import "./App.css";
import Form from "./Form";
import UnorderedList from "./UnorderedList";
import Buttons from "./Buttons";
import {Division} from "./Division";
import Header from "./Header";
import Main from "./Main";
import React, { useState } from "react";

const tasks = [
  { id: 1, content: "Umyć okna", done: false },
  { id: 2, content: "Zrobić sernik", done: true },
];



function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <Main>
      <section className="section">
        <Header title="Lista zadań" />
        <Division title="Dodaj nowe zadanie" content={<Form />} />
        <Division
          title="Lista zadań"
          extraContent={<Buttons tasks={tasks}
          hideDone={hideDone}
          toggleHideDone={toggleHideDone}
          />}
          content={<UnorderedList tasks={tasks} hideDone={hideDone} />}
        />
      </section>
    </Main>
  );
}

export default App;
