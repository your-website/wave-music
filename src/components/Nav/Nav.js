import React from "react";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
// Style
import { NavContainer, Button, ContentTitle } from "./style";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <NavContainer className="nav">
      <ContentTitle>Waves</ContentTitle>
      <Button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </Button>
    </NavContainer>
  );
};

export default Nav;
