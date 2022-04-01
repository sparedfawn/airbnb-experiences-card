import React from "react";
import styledComponents from "styled-components";

import Group from "../images/photo-group.png";

const Hero = () => {
    return (
        <StyledSection>
            <StyledImage src={Group} />
            <StyledTitle>Online Experiences</StyledTitle>
            <StyledText>
                Join unique interactive activities led by one-of-a-kind
                hosts—all without leaving home.
            </StyledText>
        </StyledSection>
    );
};

export default Hero;

const StyledSection = styledComponents.section`
    display: flex;
    flex-direction: column;
`;

const StyledImage = styledComponents.img`
    max-width: 400px;
    align-self: center;
`;

const StyledTitle = styledComponents.h1`
    margin-top: 24px;
    margin-bottom: 16px;
    font-size: 36px;
    line-height: 110%;
    font-weight: 600;
`;

const StyledText = styledComponents.p`
    margin-top: 0px;
    line-height: 110%;
    font-size: 16px;
    font-weight: 300;
    max-width: 320px;
`;
