import React from "react";
import { connect } from "react-redux";
import { setSongIsPlaying, setActiveSong } from "../../store/actions/songs";

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
  setSongIsPlaying,
  songs,
  setActiveSong,
}) => {
  const { name, cover, artist, id } = song;

  const songSelectHandlerntSong = async () => {
    await setCurrentSong(song);
    setActiveSong(songs, id);
    setSongIsPlaying(true);
    audioRef.play();
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

const mapStateToProps = ({ songsData, audioRef }) => {
  return {
    audioRef,
    songs: songsData,
  };
};

export default connect(mapStateToProps, { setSongIsPlaying, setActiveSong })(
  LibrarySong
);
