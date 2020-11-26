import React from "react";
import {
  LibrarySongContainer,
  SongImage,
  ContentTitle,
  ContentSubtitle,
  SongDescription,
} from "./style";

const LibrarySong = ({ song, setCurrentSong, audioRef, setIsPlaying }) => {
  const { name, cover, artist } = song;

  const songSelectHandlerntSong = async () => {
    await setCurrentSong(song);
    setIsPlaying(true);
    audioRef.current.play();
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
