import React from "react";
import Markdown from "react-styleguidist/lib/rsg-components/Markdown";
// import Preview from "react-styleguidist/lib/rsg-components/Preview";
import { styled, Block } from "reas";
import Editor from "./Editor";

const Wrapper = styled(Block)`
  padding: 3em;
  padding-top: 1.5em;
  width: 100%;
`;

const getSection = ({ location, allSections }) => {
  const slugs = location.pathname.split("/").filter(Boolean);
  return slugs.filter(Boolean).reduce((section, slug) => {
    const items = Array.isArray(section)
      ? section
      : [...section.sections, ...section.components];

    return items.find(
      item =>
        item.slug === slug ||
        // regexes make foo => Foo
        slug.match(/^\w/)[0].toUpperCase() + slug.match(/^\w(.*)/)[1]
    );
  }, allSections);
};

const sectionMap = {
  markdown: ({ content }) => <Markdown text={content} />,
  code: ({ content, evalInContext }) => <Editor code={content} />
};

const Section = props => {
  const section = getSection(props);
  const sectionContent = section.hasExamples
    ? section.props.examples
    : section.content;
  if (sectionContent) {
    return (
      <Wrapper {...props}>
        {sectionContent.map(
          ({ type, ...content }) =>
            sectionMap[type] ? sectionMap[type](content) : null
        )}
      </Wrapper>
    );
  }
  return null;
};

export default Section;
