import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider, Block } from "reas";
import ConfigContext from "../ConfigContext";
import "./globalStyles";
import Home from "../Home";
import Guide from "../Guide";

const Wrapper = Block.extend`
  font-family: sans-serif;
`;

const App = props => (
  <Provider>
    <ConfigContext.Provider value={props.config}>
      <Wrapper>
        <Router>
          <Switch>
            <Route exact path="/" render={Home} {...props} />
            <Route exact path="/guide" render={Guide} {...props} />
          </Switch>
        </Router>
      </Wrapper>
    </ConfigContext.Provider>
  </Provider>
);

export default App;
