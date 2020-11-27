import React, { useState } from "react";
import { connect } from "react-redux";

import { GlobalStyle, AppContainer } from "./assets/style";

import Song from "./components/Song";
import Player from "./components/Player";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Audio from "./components/Audio/Audio";

function App({ songs }) {
  const [currentSong, setCurrentSong] = useState(
    songs.find((el) => el.active === true)
  );

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <AppContainer className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <GlobalStyle />
      <Song currentSong={currentSong} />
      <Player
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <Library
        libraryStatus={libraryStatus}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Audio
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </AppContainer>
  );
}

const mapStateToProps = ({ songsData }) => {
  return { songs: songsData };
};

export default connect(mapStateToProps)(App);
