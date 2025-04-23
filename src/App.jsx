// import { useState } from 'react'
import "./assets/style/App.css";
import BackgroundWrapper from "./components/BackgroundWrapper";
import ContentContainer from "./components/ContentContainer";

function App() {
    return (
        <>
            <BackgroundWrapper>
                <ContentContainer></ContentContainer>
            </BackgroundWrapper>
        </>
    );
}

export default App;
