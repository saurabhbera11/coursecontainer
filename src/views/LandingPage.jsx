import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { BackgroundImage } from "../components/styled/LandingPageStyled";
import MainContent from "../components/MainContent";
function LandingPage() {
  return (
    <>


      <BackgroundImage>
      <NavBar />
      <MainContent/>

      </BackgroundImage>

    </>
  );
}

export default LandingPage;
