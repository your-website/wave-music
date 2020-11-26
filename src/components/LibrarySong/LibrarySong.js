import React from "react";
import {
  LibrarySongContainer,
  SongImage,
  ContentTitle,
  ContentSubtitle,
  SongDescription,
} from "./style";

const LibrarySong = ({
  song,
  song: { name, cover, artist, id },
  setCurrentSong,
  setIsPlaying,
}) => {
  const songSelectHandlerntSong = async () => {
    await setIsPlaying(false);
    await setCurrentSong(song);
  };

  return (
    <LibrarySongContainer
      onClick={songSelectHandlerntSong}
      className="librarySongContainer"
    >
      <SongImage src={cover} alt={name} />
      <SongDescription>
        <ContentTitle>{name}</ContentTitle>
        <ContentSubtitle>{artist}</ContentSubtitle>
      </SongDescription>
    </LibrarySongContainer>
  );
};

export default LibrarySong;
