import React, { useState } from "react";

function App() {
  const [names, setNames] = useState(["Арген", "Максат", "Жанылай"])

  const keysNames = names.map(n => {
    return {
      name: n,
      key: (Math.random() + 1).toString(36).substring(7)
    }
  })

  return (
    <ul>
      {keysNames.map(({ name, key }) => (
        <li key={key}>{name}</li>
      ))}
    </ul>
  );
}

export default App;
