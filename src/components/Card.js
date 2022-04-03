import React from "react";
import styledComponents from "styled-components";

import Star from "../images/star.svg";

const Card = ({ card }) => {
    const imageSource = "/images/" + card.coverImg;

    let badgeText;
    if (card.openSpots === 0) {
        badgeText = "SOLD OUT";
    } else if (card.location === "Online") {
        badgeText = "ONLINE";
    }

    return (
        <StyledCard>
            <StyledBadge badgeText={badgeText}>{badgeText}</StyledBadge>
            <StyledImage src={imageSource} />
            <StyledStats>
                <StyledStar src={Star} />
                <span>{card.stats.rating}</span>
                <StyledSpanText>
                    {card.stats.reviewCount} • {card.location}
                </StyledSpanText>
            </StyledStats>
            <p>{card.title}</p>
            <p>
                <StyledSpanBold>From ${card.price}</StyledSpanBold> / person
            </p>
        </StyledCard>
    );
};

export default Card;

const StyledBadge = styledComponents.div`
    position: absolute;
    top: 6px;
    left: 6px;
    background-color: white;
    padding: 5px 7px;
    border-radius: 2px;
    font-weight: bold;
    display: ${({ badgeText }) => (badgeText !== undefined ? "block" : "none")}
`;

const StyledCard = styledComponents.div`
    position: relative;
    max-width: 150px;
    font-size: 12px;
    margin: 16px;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
`;

const StyledStats = styledComponents.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
`;

const StyledSpanText = styledComponents.span`
    color: #918E9B;
    margin-left: 4px;
`;

const StyledSpanBold = styledComponents.span`
    font-weight: bold;
`;

const StyledImage = styledComponents.img`
    width: 100%;
    max-height: 200px;
    border-radius: 10px;
`;

const StyledStar = styledComponents.img`
    height: 14px;
    margin-right: 2px;
`;
