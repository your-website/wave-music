import styled from "styled-components";
import { H2, H3 } from "../../../assets/style";
import Input from "./Input";
import { ContainerAnim, ContainerAnimConverse } from "./Animate";
import { Track } from "./Track";
import { AnimateContainerVolume } from "./AnimateContainerVolume";
const SongContainer = styled.div`
  position: relative;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SongImage = styled.img`
  width: 100%;
  z-index: 2;
`;

const ContentTitle = styled(H2)`
  padding: 3rem 1rem 1rem 1rem;
`;

const ContentSubtitle = styled(H3)`
  font-size: 1rem;
`;

const Control = styled.div`
  position: relative;
  height: 100%;
  width: 20%;

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

const Svg = styled.svg`
  position: absolute;
  top: 0;
  height: 100%;
  width: 40px;
  left: -2.5rem;
`;

export {
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
};
