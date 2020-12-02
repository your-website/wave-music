import React from "react";
// Component
import LibrarySong from "../LibrarySong";
// Style
import { LibraryContainer, ContentTitle } from "./style";
const Library = ({ songs, setCurrentSong, libraryStatus }) => {
  return (
    <LibraryContainer
      className={`libraryContainer ${libraryStatus ? "active-library" : null}`}
    >
      <ContentTitle>Library</ContentTitle>
      <div>
        {songs.map((song) => (
          <LibrarySong
            song={song}
            setCurrentSong={setCurrentSong}
            key={song.id}
          />
        ))}
      </div>
    </LibraryContainer>
  );
};

export default Library;
