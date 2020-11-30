import React, { useState } from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import SpanAnim from "./../SpanAnim";

import {
  SongContainer,
  SongImage,
  ContentTitle,
  ContentSubtitle,
  Input,
  ContainerAnim,
  ContainerAnimConverse,
  Track,
  AnimateContainerVolume,
  Control,
  Svg,
} from "./style";

// Animate
import { SliderContainer, ReverseSliderContainer } from "../../animate";

const Song = ({
  currentSong: { cover, name, artist },
  currentSong,
  songInfo,
  setSongInfo,
  audioRef,
}) => {
  const [openPrompt, setOpenPrompt] = useState(true);

  const changeVolume = (e) => {
    let value = e.target.value;
    audioRef.volume = value;
    setSongInfo({ ...songInfo, volume: value });
  };

  const visiblePrompt = () => {
    setOpenPrompt(!openPrompt);
  };

  const trackAnim = {
    transform: `translateY(${-songInfo.volume * 100}%)`,
    background: currentSong.color[0],
    opacity: 0.7,
  };

  return (
    <SongContainer>
      <Control className="control">
        <Input
          onChange={changeVolume}
          max="1"
          min="0"
          step="0.01"
          type="range"
          value={songInfo.volume}
        />

        <Svg
          style={{ display: `${openPrompt ? "flex" : "none"}` }}
          viewBox="0 0 74 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0, pathOffset: 1 }}
            animate={{ pathLength: 1, pathOffset: 0 }}
            transition={{ duration: 2 }}
            d="M0 10.5H68M68 10.5L43 20.5M68 10.5L43 2"
            stroke="#B015A1"
            stroke-width="4"
          />
        </Svg>

        <ContainerAnim
          onClick={visiblePrompt}
          style={{ display: `${openPrompt ? "flex" : "none"}` }}
          variants={SliderContainer}
          initial="hidden"
          animate="show"
        >
          <SpanAnim title="CHANGE" />
        </ContainerAnim>

        <ContainerAnimConverse
          onClick={visiblePrompt}
          style={{ display: `${openPrompt ? "flex" : "none"}` }}
          variants={ReverseSliderContainer}
          initial="hidden"
          animate="show"
        >
          <br />
          <SpanAnim title="VOLUME" />
        </ContainerAnimConverse>

        <Track>
          <SongImage src={cover} alt={name} />
          <AnimateContainerVolume style={trackAnim} />
        </Track>
      </Control>

      <ContentTitle>{name}</ContentTitle>
      <ContentSubtitle>{artist}</ContentSubtitle>
    </SongContainer>
  );
};

const mapStateToProps = ({ audioRef }) => {
  return { audioRef };
};

export default connect(mapStateToProps)(Song);
