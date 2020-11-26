import styled from "styled-components";
import { H3, H4 } from "../../../assets/style";

const LibrarySongContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(222, 222, 225);
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
