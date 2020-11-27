import styled from "styled-components";

export const PlayerInput = styled.input`
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

  &::-moz-slider-thumb {
    -webkit-appearance: none;
    background: transparent;
    border: none;
  }
`;
