import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { ifProp } from "styled-tools";
import debounce from "lodash/debounce";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/jsx/jsx";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/paraiso-light.css";
import ConfigContainer from "../containers/ConfigContainer";
import { Block, Button, Box, InlineBlock, Inline, Flex } from "reas";

const StyledCodeMirror = styled(CodeMirror)`
  .CodeMirror {
    border: 2px dashed rgba(0, 0, 0, 0.4);
    font-family: "Fira Code", monospace;
    line-height: 1.2rem;
    background-color: rgb(0, 0, 0, 0.05) !important;
    padding: 1em;
    height: auto;
    max-width: 100%;
    margin-bottom: 20px;

    &:hover {
      border: 2px solid Orange;
    }

    .CodeMirror-lines {
      font-size: 14px;
      font-weight: 400;

      .CodeMirror-line {
        white-space: pre-wrap;
      }
    }

    ${ifProp(
      "options.readOnly",
      css`
        .CodeMirror-cursor {
          display: none;
        }
      `
    )};
  }
`;

const CodeWrapper = styled(Block)``;

const CWrapper = styled(Flex)`
  z-index: 100;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1em;
  margin-top: 3em;
`;

const StyledButton = styled(Button)``;

const SInline = styled(Inline)`
  margin-right: 1em;
  font-weight: 700;
  font-size: 1.1rem;
`;

class Editor extends React.Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
    readOnly: PropTypes.bool,
    onChange: PropTypes.func
  };

  shouldComponentUpdate() {
    return true;
  }

  handleChange = debounce((editor, metadata, newCode) => {
    const { onChange } = this.props;
    if (typeof onChange === "function") {
      onChange(newCode);
    }
  }, 10);

  render() {
    const { code, readOnly } = this.props;
    return (
      <ConfigContainer>
        {({ editorConfig }) => (
          <CodeWrapper>
            <CWrapper>
              <SInline>{"Live demo"}</SInline>
              <StyledButton>{"Reset"}</StyledButton>
            </CWrapper>
            <StyledCodeMirror
              value={code}
              onChange={this.handleChange}
              options={{ ...editorConfig, theme: "paraiso-light", readOnly }}
            />
          </CodeWrapper>
        )}
      </ConfigContainer>
    );
  }
}

export default Editor;
