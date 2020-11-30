import styled from "styled-components";

const Input = styled.input`
  position: absolute;
  top: -1%;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
  z-index: 2;

  -webkit-appearance: none;
  background: transparent;
  cursor: pointer;

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

export default Input;
