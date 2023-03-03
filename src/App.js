import React, { useState } from "react";

function App() {
  const [ names ] = useState(["Арген", "Максат", "Жанылай"])

  return (
    <ul>
      {names.map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

export default App;
