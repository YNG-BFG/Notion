import React, { useState } from 'react';

const MusicWidget = ({ imageSrc, tracks }) => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const playTrack = (track) => {
    // Add logic to play the selected track
    setCurrentTrack(track);
  };

  return (
    <div className="music-widget">
      <img src={imageSrc} alt="Album Art" className="album-art" />

      <ul className="track-list">
        {tracks.map((track, index) => (
          <li key={index} onClick={() => playTrack(track)}>
            {track}
          </li>
        ))}
      </ul>

      {currentTrack && <p>Now playing: {currentTrack}</p>}
    </div>
  );
};


export default MusicWidget;
