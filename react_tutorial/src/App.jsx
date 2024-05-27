import React, { useState } from "react";
import { data } from "./data";

function App() {
  const [people, SetPeople] = useState(data);

  const handleRomeveAll = () => {
    SetPeople([]);
  };

  const handleRemoveOne = (id) => {
    SetPeople((people) => people.filter((person) => person.id !== id));
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person
        return <div key={id}>
          <h3>{name}</h3>
          {people ? (
            <button onClick={() => handleRemoveOne(id)}>Click Me</button>
          ) : (
            <></>
          )}
        </div>;
      })}
      <button onClick={handleRomeveAll}>Remove all</button>
    </div>
  );
}

export default App;
