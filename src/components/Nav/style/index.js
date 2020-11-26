import styled from "styled-components";

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

  &:hover {
    background: rgb(65, 65, 65);
    color: #fff;
  }
`;

export { NavContainer, Button };
