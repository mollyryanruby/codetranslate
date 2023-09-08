import React from 'react';
import './App.css';
import Translation from './components/translation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Code Translator</h1>
      </header>
      <body>
        <div className="App">
          <Translation />
        </div>
      </body>
    </div>
  );
}

export default App;