import styled from "styled-components";
import { H2 } from "../../../assets/style";

const LibraryContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20rem;
  height: 100%;
  box-shadow: 2px 2px 50px rgb(204, 204, 204);
  overflow: scroll;
`;

const ContentTitle = styled(H2)`
  padding: 2rem;
`;

export { LibraryContainer, ContentTitle };
