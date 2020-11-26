import React, { useState } from "react";
import data from "./data";

import "./App.css";
import Song from "./components/Song";
import Player from "./components/Player";

function App() {
  const [songs, setSongs] = useState(data());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(
    songs.find((el) => el.active === true)
  );

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
