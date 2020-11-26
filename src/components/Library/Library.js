import { faSmog } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import LibrarySong from "../LibrarySong";
import { LibraryContainer, ContentTitle } from "./style";
const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  setIsPlaying,
  setSongs,
  libraryStatus,
  isPlaying,
}) => {
  return (
    <LibraryContainer
      className={`libraryContainer ${libraryStatus ? "active-library" : null}`}
    >
      <ContentTitle>Library</ContentTitle>
      <div>
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            key={song.id}
            audioRef={audioRef}
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </LibraryContainer>
  );
};

export default Library;
