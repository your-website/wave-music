import styled from "styled-components";

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
  padding: 1rem 2rem;
`;

const Label = styled.label`
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

export { PlayerContainer, PlayerInput, TimeControl, Label, PlayControl };
