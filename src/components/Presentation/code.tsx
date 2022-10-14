// Import React
import React from "react";
import dracula from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

// Import Spectacle Core tags
import {
  FlexBox,
  Box,
  FullScreen,
  Progress,
  Deck,
  Heading,
  Slide,
  CodePane,
  Link,
} from "spectacle";

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
  colors: {
    white: "#FFFFFF",
    dark: "#112F41",
    darkCyan: "#068587",
    yellow: "#F2B134",
    cyan: "#4FB99F",
    danger: "#ED553B",
    text: {
      yellowx: "#F2B134",
    },
    background: {
      light: "#FFFFFF",
      dark: "#252A34",
    },
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
      <FullScreen color="#F2B134" />
    </Box>
    <Box padding="1em">
      <Progress color="#F2B134" />
    </Box>
  </FlexBox>
);

export const helloWorld = /* ts */ `
import { createServer } from '@graphql-yoga/node';
import SchemaBuilder from '@pothos/core';

const builder = new SchemaBuilder({});

builder.queryType${"({"}
  fields: (t) => ${"({"}
    hello: t.string${"({"}
      args: {
        name: t.arg.string(),
      },
      resolve: (_, args) => \`hello, \${args.name || 'World'}\`,
    }),
  }),
});

const server = createServer({
  schema: builder.toSchema({}),
});
`;

export default function Code() {
  return (
    <Deck theme={theme} template={template}>
      <Slide backgroundColor="background.light">
        <Heading color="yellow">Welcome to Spectacle</Heading>
      </Slide>

      <Slide backgroundColor="background.dark">
        <CodePane
          language="typescript"
          theme={dracula}
          highlightRanges={[
            [4, 4],
            [6, 6],
            [7, 7],
            [8, 8],
            [9, 11],
            [12, 12],
            [17, 19],
            [1, 19],
          ]}
        >
          {helloWorld}
        </CodePane>
      </Slide>
    </Deck>
  );
}
