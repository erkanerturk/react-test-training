import React from 'react';
import './App.css';

import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

function App() {
  return (
    <div className="container">
      <Congrats success={false}></Congrats>

      <GuessedWords guessedWords={[]}></GuessedWords>
    </div>
  );
}

export default App;
