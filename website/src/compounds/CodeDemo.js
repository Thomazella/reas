import React from "react";
import { styled, Block } from "reas";
import Editor from "./Editor";
import Preview from "./Preview";

const CodeDemo = props => {
  return (
    <div>
      <Preview code={props.content} evalInContext={props.evalInContext} />
      <Editor code={props.content} />
    </div>
  );
};

export default CodeDemo;
