import React from "react";
import styledComponents from "styled-components";

import data from "../data";
import Card from "./Card";

const CardList = () => {
    const cards = data.map((card) => {
        return <Card key={card.id} card={card} />;
    });

    return <StyledContainer>{cards}</StyledContainer>;
};

export default CardList;

const StyledContainer = styledComponents.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-weight: 300;
`;
