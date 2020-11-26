import { faSmog } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import LibrarySong from "../LibrarySong";
import { LibraryContainer, ContentTitle } from "./style";
const Library = ({ songs, setCurrentSong, audioRef, setIsPlaying }) => {
  return (
    <LibraryContainer className="LibraryContainer">
      <ContentTitle>Library</ContentTitle>
      <div>
        {songs.map((song) => (
          <LibrarySong
            song={song}
            setCurrentSong={setCurrentSong}
            key={song.id}
            audioRef={audioRef}
            setIsPlaying={setIsPlaying}
          />
        ))}
      </div>
    </LibraryContainer>
  );
};

export default Library;
