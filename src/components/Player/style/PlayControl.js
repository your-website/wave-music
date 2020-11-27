import styled from "styled-components";

export const PlayControl = styled.div`
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
