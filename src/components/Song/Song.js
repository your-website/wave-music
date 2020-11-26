import React from "react";
import {
  SongContainer,
  SongImage,
  ContentTitle,
  ContentSubtitle,
} from "./style";

const Song = ({ currentSong: { cover, name, artist } }) => {
  return (
    <SongContainer>
      <SongImage src={cover} alt={name} />
      <ContentTitle>{name}</ContentTitle>
      <ContentSubtitle>{artist}</ContentSubtitle>
    </SongContainer>
  );
};

export default Song;
