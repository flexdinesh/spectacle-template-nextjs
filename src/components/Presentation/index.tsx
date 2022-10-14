import React from "react";
import { Deck, Slide, Heading } from "spectacle";


// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
  colors: {
    primary: "#EAEAEA",
    secondary: "#FF2E63",
    // tertiary: "hotpink",
    background: "#252A34",
    background2: "#057777",
  },
};

function Presentation() {
  return (
    <Deck theme={theme}>
      <Slide>
        <Heading>Welcome to Spectacle</Heading>
      </Slide>
    </Deck>
  );
}

export default Presentation;
