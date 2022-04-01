import React from "react";
import styledComponents from "styled-components";

import Logo from "../images/airbnb.svg";

const NavBar = () => {
    return (
        <StyledNavContainer>
            <StyledImage src={Logo} />
        </StyledNavContainer>
    );
};

export default NavBar;

const StyledImage = styledComponents.img`
    max-width: 100px;
`;

const StyledNavContainer = styledComponents.nav`
    height: 70px;
    display: flex;
    padding: 20px 36px;
    box-shadow: 0px 3px 7.5px rgba(0, 0, 0, 0.1);
`;
