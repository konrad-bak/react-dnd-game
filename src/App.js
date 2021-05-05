import React, { useState } from "react";
import "./App.css";
import { Welcome } from "./Components/Welcome";
import { Game } from "./Components/Game/Game";

function App() {
  const [name, setName] = useState("");
  const [page, setPage] = useState("welcome");

  const handleChange = (newValue) => {
    setName(newValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) return;

    setPage("game");
  };

  return (
    <div className="App">
      {page === "welcome" && (
        <Welcome name={name} onChange={handleChange} onSubmit={handleSubmit} />
      )}
      {page === "game" && <Game name={name} />}
    </div>
  );
}

export default App;
