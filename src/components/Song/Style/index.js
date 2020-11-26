import styled from "styled-components";
import { H2, H3 } from "../../../assets/style";

const SongContainer = styled.div`
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SongImage = styled.img`
  width: 20%;
  border-radius: 50%;

  @media screen and (max-width: 768px) {
    width: 60%;
  }
`;

const ContentTitle = styled(H2)`
  padding: 3rem 1rem 1rem 1rem;
`;

const ContentSubtitle = styled(H3)`
  font-size: 1rem;
`;

export { SongContainer, SongImage, ContentTitle, ContentSubtitle };
