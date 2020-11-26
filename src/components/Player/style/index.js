import styled from "styled-components";

const PlayerContainer = styled.div`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TimeControl = styled.div`
  width: 50%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const PlayerInput = styled.input`
  width: 100%;
  -webkit-appearance: none;
  background: transparent;
  cursor: pointer;
  margin: 0;

  &:focus {
    border: none;
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
  }
`;

const Paragraph = styled.p`
  padding: 1rem;
`;

const PlayControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 40%;

  & svg {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

const Track = styled.div`
  position: relative;
  width: 100%;
  height: 1rem;
  background: lightblue;
  border-radius: 1rem;
  overflow: hidden;
`;

const AnimateTrack = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(204, 204, 204);
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0);
  pointer-events: none;
`;

export {
  PlayerContainer,
  PlayerInput,
  TimeControl,
  Paragraph,
  PlayControl,
  Track,
  AnimateTrack,
};
