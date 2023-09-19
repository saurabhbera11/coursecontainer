import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { BackgroundImage } from "../components/styled/LandingPageStyled";
function LandingPage() {
  return (
    <>
      <BackgroundImage>
        <NavBar />
      </BackgroundImage>
    </>
  );
}

export default LandingPage;
