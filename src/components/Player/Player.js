import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  PlayerContainer,
  PlayerInput,
  TimeControl,
  Paragraph,
  PlayControl,
} from "./style";

const Player = ({ currentSong: { audio }, isPlaying, setIsPlaying }) => {
  const audioRef = useRef(null);

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <PlayerContainer>
      <h1>Hello Player</h1>
      <TimeControl>
        <Paragraph>start time</Paragraph>
        <PlayerInput id="time" type="range" />
        <Paragraph>end time</Paragraph>
      </TimeControl>
      <PlayControl>
        <FontAwesomeIcon size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon onClick={playSongHandler} size="2x" icon={faPlay} />
        <FontAwesomeIcon size="2x" icon={faAngleRight} />
      </PlayControl>
      <audio ref={audioRef} src={audio}></audio>
    </PlayerContainer>
  );
};

export default Player;
