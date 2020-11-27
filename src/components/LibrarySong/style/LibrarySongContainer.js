import styled from "styled-components";

export const LibrarySongContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  cursor: pointer;
  background-color: #fff;
  transition: background-color 0.3s ease;

  &.selected {
    background: #f9e1f9;
  }

  &:hover {
    background: rgb(222, 222, 225);
  }

  @media screen and (max-width: 768px) {
  }
`;
