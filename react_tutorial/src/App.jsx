import React, { useState } from "react";
import { data } from "./data";

function App() {
  const [people, SetPeople] = useState(data);

  const handleRomeveAll = () => {
    SetPeople([]);
  };

  const handleRemoveOne=(id)=>{
    SetPeople(people=>people.filter(person=>person.id!==id))
  }
  return (
    <div>
      
      {people.map((person) => (
        <div key={person.id}>
          <h3>{person.name}</h3>
          {people ? (
            <button onClick={() => handleRemoveOne(person.id)}>Click Me</button>
          ) : (
            <></>
          )}
        </div>
      ))}
      <button onClick={handleRomeveAll}>Remove all</button>
    </div>
  );
}

export default App;
