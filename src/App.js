import React, { useState } from 'react';
import Translation from './components/translation';
import TranslateButton from './components/translatebutton';
import Navigation from './components/navigation_bar'
import './App.css';

import v from './images/arrow.png'

function App() {
  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <h1>
          Code translation at <br/>
          your fingertips.
        </h1>
        <p>
          Type code in one language and see it
          automagically translate to another language.
        </p>
        <div>
        <TranslateButton />
        </div>
      </header>
      <img className='Arrow' src={v} alt="React Image"/>
      <body>
          <div className="App-function">
            <Translation />
        </div>
      </body>
      <footer class="Footer"></footer>
    </div>
  );
}

export default App;