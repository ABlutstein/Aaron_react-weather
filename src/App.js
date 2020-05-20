import React from "react";
import Weather from "./components/Weather/Weather.forecast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App milestone</h1>
        <p>By Aaron Blutstein</p>
      </header>
      <div className="App-main">
        <main>
          <Weather />
        </main>
        <footer>Aaron Blutstein © 2020</footer>
      </div>
    </div>
  );
}

export default App;
