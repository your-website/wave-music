import React, { useState } from "react";
import data from "./data";
import { GlobalStyle } from "./assets/style";
import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";

function App() {
  const [songs, setSongs] = useState(data());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(
    songs.find((el) => el.active === true)
  );

  return (
    <div className="App">
      <GlobalStyle />
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library
        setIsPlaying={setIsPlaying}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
