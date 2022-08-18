import React from "react";
import FormularNeuerKollege from "./FormularNeuerKollege";

const NeuerKollege = (propsApp) => {

const saveKollegeHandler = (eingegebeneNeueDaten) => {

    const eingaben = {
        ...eingegebeneNeueDaten,
        id: Math.random().toString()
    };
    propsApp.beimHinzufuegenKollege(eingaben);
};

  return (
    <div>
      <FormularNeuerKollege beimSpeichern = {saveKollegeHandler} />
    </div>
  );
};

export default NeuerKollege;
