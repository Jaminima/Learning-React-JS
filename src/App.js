import React from 'react';
import './App.css';
import BetterButton from "./CustomComponents/Button.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <BetterButton alternateText="Aurevoir" alternateColor="secondary" revertable={true}>Bongour</BetterButton>

      </header>
    </div>
  );
}

export default App;
