import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";

import { UnControlled as CodeMirror } from "react-codemirror2";
import { Block, Button, Box, InlineBlock, Inline, Flex, styled } from "reas";

const StyledCodeMirror = styled(CodeMirror)`
  .CodeMirror {
    font-family: "Fira Code", monospace;
    line-height: 1.2rem;
    background-color: rgb(0, 0, 0, 0.05) !important;
    height: auto;
    max-width: 100%;
    margin-bottom: 20px;

    &:hover {
      box-shadow: inset 0 0 10px pink;
    }

    .CodeMirror-lines {
      font-size: 14px;
      font-weight: 400;

      .CodeMirror-line {
        white-space: pre-wrap;
      }
    }
  }
`;

const CodeWrapper = styled(Block)`
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.05);
  margin-bottom: 1em;
  margin-top: 3em;
`;

const CWrapper = styled(Flex)`
  z-index: 100;
  align-items: center;
  justify-content: space-between;
  margin: 1em 0 1em 0;
`;

const StyledButton = styled(Button)``;

const SInline = styled(Inline)`
  margin-right: 1em;
  font-weight: 700;
  font-size: 1.1rem;
`;

const CodeDemo = props => (
  <CodeWrapper>
    <CWrapper>
      <SInline>{"Interactive demo"}</SInline>
      <StyledButton>{"Reset"}</StyledButton>
    </CWrapper>
    <Editor code={props.content} />
    <CWrapper>
      <SInline>{"Result"}</SInline>
    </CWrapper>
    <Preview code={props.content} evalInContext={props.evalInContext} />
  </CodeWrapper>
);

export default CodeDemo;
