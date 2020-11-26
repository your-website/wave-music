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
  setCurrentSong,
  audioRef,
  setIsPlaying,
  songs,
  setSongs,
  isPlaying,
}) => {
  const { name, cover, artist, id } = song;

  const songSelectHandlerntSong = async () => {
    await setCurrentSong(song);
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    setIsPlaying(true);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <LibrarySongContainer
      onClick={songSelectHandlerntSong}
      className={`librarySongContainer ${song.active ? "selected" : null}`}
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
