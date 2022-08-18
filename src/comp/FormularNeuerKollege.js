import React, { useState } from "react";
import "./CSS_FormularNeuerKollege.css";
import "./FormularSCSS.scss";

const FormularNeuerKollege = (propsNeuerKollege) => {
  const [eingegebenerName, setName] = useState("");
  const [eingegebenerSektor, setSektor] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
    // console.log(event.target.value);
  };

  const sektorHandler = (event) => {
    setSektor(event.target.value);
    console.log(eingegebenerName.trim().length);
  };

  // const nameHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return {...prevState, eingegebenerSektor: event.target.value};
  //   });
  // };

  // const sektorHandler = (event) => {
  //   setUserInput((prevState) => {
  //     return {...prevState, eingegebenerSektor: event.target.value};
  //   });
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const neueDaten = {
      id: Math.random().toString(),
      rufname: eingegebenerName,
      sektor: eingegebenerSektor,
    };
    propsNeuerKollege.beimSpeichern(neueDaten);
    setName("");
    setSektor("");
  };

  return (
    <div>
      <div className="neuerkollege">
        <form onSubmit={submitHandler}>
          <label>Name des neuen Kollegen: </label>
          <br />
          <input type="text" value={eingegebenerName} onChange={nameHandler} />
          <br />
          <label>Tätigkeit des neuen Kollegen: </label>
          <br />
          <input
            type="text"
            value={eingegebenerSektor}
            onChange={sektorHandler}
          />
          <br />
          <button type="submit">Speichern</button>
        </form>
      </div>
    </div>
  );
};

export default FormularNeuerKollege;
