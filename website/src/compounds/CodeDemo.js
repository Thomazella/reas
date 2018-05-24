import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import { Block, Button, Inline, Flex, styled } from "reas";

const CodeWrapper = styled(Block)`
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.05);
  margin-bottom: 1em;
  margin-top: 3em;
`;

const StyledButton = styled(Button)`
  z-index: 100;
`;

const FlexWrapper = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2em;
`;

const Spacer = styled(Block)`
  margin-top: 4em;
`;

const StyledInline = styled(Inline)`
  margin-right: 1em;
  font-weight: 700;
  font-size: 1.1rem;
`;

const CodeDemo = props => (
  <CodeWrapper>
    <FlexWrapper>
      <StyledInline>{"Interactive demo"}</StyledInline>
      <StyledButton>{"Reset"}</StyledButton>
    </FlexWrapper>
    <Editor code={props.content} />
    <FlexWrapper>
      <StyledInline>{"Result"}</StyledInline>
    </FlexWrapper>
    <Spacer />
    <Preview code={props.content} evalInContext={props.evalInContext} />
  </CodeWrapper>
);

export default CodeDemo;
