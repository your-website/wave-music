import React from "react";
import LibrarySong from "../LibrarySong";
import { LibraryContainer, ContentTitle } from "./style";
const Library = ({ songs }) => {
  return (
    <LibraryContainer className="LibraryContainer">
      <ContentTitle>Library</ContentTitle>
      <div>
        {songs.map((song) => (
          <LibrarySong song={song} />
        ))}
      </div>
    </LibraryContainer>
  );
};

export default Library;
