import styled from "styled-components";
import { H1 } from "../../../assets/style";

const PlayerContainer = styled.section`
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TimeControl = styled.div`
  width: 50%;
  display: flex;
`;

const PlayerInput = styled.input`
  width: 100%;
  padding: 1rem 0;
`;

const Paragraph = styled.p`
  padding: 1rem;
`;

const PlayControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 30%;

  & svg {
    cursor: pointer;
  }
`;

export {
  PlayerContainer,
  PlayerInput,
  TimeControl,
  Paragraph,
  PlayControl,
  H1,
};