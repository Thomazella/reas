import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { transform } from "buble";
import splitExampleCode from "react-styleguidist/lib/utils/splitExampleCode";
import ConfigContainer from "../containers/ConfigContainer";

const compileCode = (code, config) => transform(code, config).code;
const wrapCodeInFragment = code => `<React.Fragment>${code}</React.Fragment>;`;

class Preview extends React.Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
    config: PropTypes.object.isRequired,
    evalInContext: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.executeCode();
  }

  componentDidUpdate(prevProps) {
    if (this.props.code !== prevProps.code) {
      this.executeCode();
    }
  }

  componentWillUnmount() {
    this.unmountPreview();
  }

  getExampleComponent(compiledCode) {
    return this.props.evalInContext(compiledCode)();
  }

  mountNode = React.createRef();

  unmountPreview() {
    if (this.mountNode.current) {
      ReactDOM.unmountComponentAtNode(this.mountNode.current);
    }
  }

  executeCode() {
    const { code } = this.props;
    if (!code) return;

    const compiledCode = this.compileCode(code);
    if (!compiledCode) return;

    const { example } = splitExampleCode(compiledCode);
    const exampleComponent = this.getExampleComponent(example);

    window.requestAnimationFrame(() => {
      this.unmountPreview();
      try {
        ReactDOM.render(exampleComponent, this.mountNode.current);
      } catch (e) {}
    });
  }

  compileCode(code) {
    try {
      const wrappedCode = code.trim().match(/^</)
        ? wrapCodeInFragment(code)
        : code;
      return compileCode(wrappedCode, this.props.config.compilerConfig);
    } catch (e) {}
    return false;
  }

  render() {
    return (
      <React.Fragment>
        <div ref={this.mountNode} />
      </React.Fragment>
    );
  }
}

export default props => (
  <ConfigContainer>
    {config => <Preview {...props} config={config} />}
  </ConfigContainer>
);
