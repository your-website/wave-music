import React from "react";
import { connect } from "react-redux";
import { setSongIsPlaying } from "../../store/actions/songs";

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
  AnimateTrack,
  Track,
} from "./style";

const Player = ({
  isPlaying,
  setSongIsPlaying,
  audioRef,
  songInfo,
  setSongInfo,
  songs,
  currentSong,
  setCurrentSong,
}) => {
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.pause();
      setSongIsPlaying(false);
    } else {
      audioRef.play();
      setSongIsPlaying(true);
    }
  };

  const dragHandler = (e) => {
    const currentTime = e.target.value;
    audioRef.current.currentTime = currentTime;
    setSongInfo({ ...songInfo, currentTime });
  };

  const skipTrackHandker = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "skip-forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if ((currentIndex - 1) % songs.length === -1) {
        await setCurrentSong(songs[songs.length - 1]);
        if (isPlaying) audioRef.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.play();
  };

  // Add the styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };

  return (
    <PlayerContainer>
      <TimeControl>
        <Paragraph>{getTime(songInfo.currentTime)}</Paragraph>
        <Track
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
          }}
        >
          <PlayerInput
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <AnimateTrack style={trackAnim} />
        </Track>
        <Paragraph>
          {songInfo.duration ? getTime(songInfo.duration) : "0:00"}
        </Paragraph>
      </TimeControl>
      <PlayControl>
        <FontAwesomeIcon
          onClick={() => skipTrackHandker("skip-back")}
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandker("skip-forward")}
          size="2x"
          icon={faAngleRight}
        />
      </PlayControl>
    </PlayerContainer>
  );
};

const mapStateToProps = ({ isPlaying, audioRef, songsData }) => {
  return { isPlaying, audioRef, songs: songsData };
};

export default connect(mapStateToProps, { setSongIsPlaying })(Player);
