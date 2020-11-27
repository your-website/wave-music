import styled from "styled-components";

export const ControlVolume = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 40%;
  height: 1rem;

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;
