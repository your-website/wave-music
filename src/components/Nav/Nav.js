import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { NavContainer, Button } from "./style";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <NavContainer className="nav">
      <h1>Waves</h1>
      <Button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </Button>
    </NavContainer>
  );
};

export default Nav;
