import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  MainContentContainer,
  TextContainer,
} from "./styled/MainContentStyled";

function MainContent() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a delay to trigger the transition after a short delay (e.g., 500ms)
    setTimeout(() => {
      setIsLoaded(true);
    }, 500);
  }, []);

  const customFontStyle = {
    fontFamily: "Lato, sans-serif",
    cursor: "text",
    color: "#000000",
    fontWeight: "bold",
    transition: "opacity 2s", // Add a transition for opacity
    opacity: isLoaded ? 1 : 0, // Start with opacity 0 and animate to 1
  };

  const customFontStyle2 = {
    fontFamily: "Lato, sans-serif",
    cursor: "text",
    color: "black",
    marginRight: "100px",
    transition: "opacity 2s", // Add a transition for opacity
    opacity: isLoaded ? 1 : 0, // Start with opacity 0 and animate to 1
  };

  return (
    <>
      <MainContentContainer>
        <TextContainer>
          <Typography variant="h1" gutterBottom style={customFontStyle}>
            A Platform That <br /> Thrives on Your Success
          </Typography>
          <Typography variant="h5" gutterBottom style={customFontStyle2}>
            If you are looking for an agency to help you <br /> create a
            remarkable upskill online, you’ve <br /> come to the right place.
            We can help you  <br />take your learning to the next level.
          </Typography>
        </TextContainer>
      </MainContentContainer>
    </>
  );
}

export default MainContent;
