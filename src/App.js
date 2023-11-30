import React from 'react';

function App() {
  // Write one title and textbox to URL data and a button

  const title = 'Computer Vision';
  return <div>
        <h1>{title}</h1>
        <label for="url-input">Insert URL or type pronpt:</label>
        <input id="url-input" type="text" placeholder='Enter URL to analyze or textual promppt to generate an image' />
        <button>Analyze</button>
        <button>Generate</button>
        </div>;
}

export default App;
