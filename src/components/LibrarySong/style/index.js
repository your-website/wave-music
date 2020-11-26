import styled from "styled-components";
import { H3, H4 } from "../../../assets/style";

const LibrarySongContainer = styled.div.attrs((props) => ({
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

const SongDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`;

const SongImage = styled.img`
  width: 30%;
`;

const ContentTitle = styled(H3)`
  font-size: 1rem;
  margin: 0;
`;

const ContentSubtitle = styled(H4)`
  font-size: 0.7rem;
  margin: 0;
`;

export {
  LibrarySongContainer,
  SongImage,
  ContentTitle,
  ContentSubtitle,
  SongDescription,
};
