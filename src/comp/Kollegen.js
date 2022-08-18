import AusgabeItem from "./AusgabeItem";

function Kollegen(propsApp) {

if (propsApp.itemsApp.length !== 0) {return (
    <div>
      {propsApp.itemsApp.map((what) => (
        <AusgabeItem
          key={what.id}
          rufnameProp={what.rufname}
          sektorProp={what.sektor}
        />
      ))}
      {/*<AusgabeItem
        rufnameProp={propsApp.itemsApp[0].rufname}
        sektorProp={propsApp.itemsApp[0].sektor}
      />
      <AusgabeItem
        rufnameProp={propsApp.itemsApp[1].rufname}
        sektorProp={propsApp.itemsApp[1].sektor}
      />
      <AusgabeItem
        rufnameProp={propsApp.itemsApp[2].rufname}
        sektorProp={propsApp.itemsApp[2].sektor}
      />*/}
    </div>
  )}
else
{return (
    <div>
      Nix anzuzeigen!
    </div>
  )}
}

export default Kollegen;
