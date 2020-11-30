import styled from "styled-components";
import { H1 } from "../../../assets/style";

const NavContainer = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  border: 2px solid rgb(65, 65, 65);
  padding: 0.5rem;
  transition: all 0.2s ease;
  z-index: 3;

  &:hover {
    background: rgb(65, 65, 65);
    color: #fff;
  }
`;

const ContentTitle = styled(H1)`
  z-index: 2;
`;

export { NavContainer, Button, ContentTitle };
