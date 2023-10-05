import React from 'react';
import './App.css';
import MusicWidget from './MusicWidget';

function App() {
  const tracks = ["Track 1", "Track 2", "Track 3"]; // Add your track names
  const imageSrc = 'album-cover.jpg'; // Replace with your image URL

  return (
    <div className="App">
      <MusicWidget imageSrc={imageSrc} tracks={tracks} />
    </div>
  );
}

export default App;

