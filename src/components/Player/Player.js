import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

import {
  PlayerContainer,
  PlayerInput,
  TimeControl,
  Paragraph,
  PlayControl,
  H1,
} from "./style";

const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
}) => {
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const dragHandler = (e) => {
    const currentTime = e.target.value;
    audioRef.current.currentTime = currentTime;
    setSongInfo({ ...songInfo, currentTime });
  };

  return (
    <PlayerContainer>
      <H1>Hello Player</H1>
      <TimeControl>
        <Paragraph>{getTime(songInfo.currentTime)}</Paragraph>
        <PlayerInput
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <Paragraph>{getTime(songInfo.duration)}</Paragraph>
      </TimeControl>
      <PlayControl>
        <FontAwesomeIcon size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon size="2x" icon={faAngleRight} />
      </PlayControl>
    </PlayerContainer>
  );
};

export default Player;
