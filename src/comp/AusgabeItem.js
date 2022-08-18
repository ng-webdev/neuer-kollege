import React from "react";
import "./CSS_Ausgabe.css";

const AusgabeItem = (propsKollegen) => {

  // eslint-disable-next-line no-lone-blocks
  {/*onClick={deleteItem}*/}

    
  return (
    <div className="ausgabe-item">
        <div>Name: {propsKollegen.rufnameProp}</div>
        <div>Abteilung: {propsKollegen.sektorProp}</div>
    </div>
  );
};

export default AusgabeItem;