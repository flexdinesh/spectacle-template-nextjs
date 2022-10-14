// Import React
import React from "react";

// Import Spectacle Core tags
import {
  FlexBox,
  Box,
  FullScreen,
  AnimatedProgress,
  Deck,
  Heading,
  Image,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  CodePane,
  // ComponentPlayground,
  Appear,
  Link,
} from "spectacle";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
  colors: {
    primary: '#FFFFFF',
    secondary: '#112F41',
    tertiary: '#068587',
    quaternary: '#F2B134',
    quinary: '#4FB99F',
    danger: '#ED553B',
    background: "#252A34",
    background2: "#057777",
  },
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <AnimatedProgress />
    </Box>
  </FlexBox>
);

export default function Nice() {
  return (
    <Deck theme={theme}>
      <Slide>
        <Heading>Welcome to Spectacle</Heading>
      </Slide>

      <Slide backgroundColor="primary">
          {/* <Image src={images.nextLogo} width={400} /> */}
          <Text caps textColor="quaternary" margin="30px 0 0">
            and the pursuit of happiness 😄
          </Text>
          <Text margin="60px 0 0" textColor="secondary" textSize="22px">
            Dimitrios C. Michalakos
          </Text>
        </Slide>
    </Deck>
  );
}
