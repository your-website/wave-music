import React from "react";

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
  Label,
  PlayControl,
} from "./style";

const Player = () => {
  return (
    <PlayerContainer>
      <h1>Hello Player</h1>
      <TimeControl>
        <Label for="time">start time</Label>
        <PlayerInput id="time" type="range" />
        <Label for="time">end time</Label>
      </TimeControl>
      <PlayControl>
        <FontAwesomeIcon className="play" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon className="play" size="2x" icon={faPlay} />
        <FontAwesomeIcon className="play" size="2x" icon={faAngleRight} />
      </PlayControl>
    </PlayerContainer>
  );
};

export default Player;
