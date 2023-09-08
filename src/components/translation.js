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
      <div className='TranslationBoxes'>
        <div className='Box'>
          <textarea
            placeholder="Enter text to translate"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='Box'>
          <div className='Result'>
            {translatedText && (
              <div>
                <p>{translatedText}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <button onClick={translateText}>Translate</button>
    </div>
  );
}

export default Translation;