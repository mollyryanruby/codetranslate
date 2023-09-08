import React, { useState } from 'react';

function Translation() {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const translateText = () => {
    // You can implement your translation logic here.
    // For now, we'll just reverse the text as an example.
    setTranslatedText(text.split('').reverse().join(''));
  };

  return (
    <div className='Translation'>
      <h2>Translate your code!</h2>
      <textarea
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={translateText}>Translate</button>
      <div className='Result'>
        {translatedText && (
          <div>
            <h3>Translation Result:</h3>
            <p>{translatedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Translation;