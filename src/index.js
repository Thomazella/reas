import as from "./enhancers/as";

export { Container, Provider } from "constate";
export styled, {
  css,
  keyframes,
  injectGlobal,
  isStyledComponent,
  consolidateStreamedStyles,
  ThemeProvider,
  withTheme,
  ServerStyleSheet,
  StyleSheetManager
} from "styled-components";
/*
I find it super confusing how you export all those above from styled-components then alias this folder to 'reas.'
Looks like reas implements those above but in reality it just exports from styled-components.

It's also confusing as hell as many files are called 'index.js'
*/

export * from "./components";

export { as };
export default as;
