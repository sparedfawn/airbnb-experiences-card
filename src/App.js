import React from "react";
import styledComponents from "styled-components";

import "./index.css";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import CardList from "./components/CardList";

function App() {
    return (
        <StyledPageContainer>
            <StyledContentContainer>
                <NavBar />
                <Hero />
                <CardList />
            </StyledContentContainer>
        </StyledPageContainer>
    );
}

export default App;

const StyledContentContainer = styledComponents.div`
    width: 550px;
    box-shadow: 0px 0px 7.5px rgba(0, 0, 0, 0.1);
    background-color: white;
`;

const StyledPageContainer = styledComponents.div`
    display: flex;
    justify-content: center;
`;
