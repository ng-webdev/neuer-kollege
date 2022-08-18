import React, { useState } from "react";

import NeuerKollege from "./comp/NeuerKollege";
import Kollegen from "./comp/Kollegen";
import Card from "./comp/Card";

const BESTANDSKOLLEGEN = [
  {
    id: "1",
    rufname: "Εκτορας",
    sektor: "Τροία",
   },
  {
    id: "2",
    rufname: "Hermes",
    sektor: "Nachrichten",
  },
  {
    id: "3",
    rufname: "Λέανδρος",
    sektor: "Relations",
  }
];

function App() {
  const [kollegen, setKollege] = useState(BESTANDSKOLLEGEN);

  const addKollegeHandler = (eingabeVomSubmit) => {
    setKollege((prevKollegen) => {
      return [eingabeVomSubmit, ...prevKollegen];
    });

    console.log("Innerhalb der App.js");
    console.log(kollegen); // bin nicht im array
  };

  return (
    <div className="App">
      <Card>
        <NeuerKollege beimHinzufuegenKollege={addKollegeHandler} />
        <Kollegen itemsApp={kollegen} />
        {/*<Kollegen itemsApp={BESTANDSKOLLEGEN}/>*/}
      </Card>
    </div>
  );
}

export default App;
