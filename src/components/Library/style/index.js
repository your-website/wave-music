import styled from "styled-components";
import { H2 } from "../../../assets/style";

const LibraryContainer = styled.div.attrs((props) => ({
  className: props.className,
}))`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  overflow: scroll;
  transform: translateX(-100%);
  transition: all 0.5s ease;
  opacity: 0;
  z-index: 2;
  background-color: #fff;

  &.active-library {
    transform: translateX(0%);
    opacity: 1;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ContentTitle = styled(H2)`
  padding: 2rem;
`;

export { LibraryContainer, ContentTitle };
