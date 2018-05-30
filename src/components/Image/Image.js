import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { ifProp } from "styled-tools";
import as from "../../enhancers/as";
import Base from "../Base";
import Block from "../Block";

const Img = styled(Base)`
  display: block;
  max-width: 100%;
  margin-left: ${ifProp("centered", "auto", "0")};
  margin-right: ${ifProp("centered", "auto", "0")};
`;

const Image = props => {
  if (props.wrapped) {
    return (
      <Block>
        <Img {...props} />
      </Block>
    );
  }

  return <Img {...props} />;
};

Image.propTypes = {
  wrapped: PropTypes.bool,
  centered: PropTypes.bool
};

export default as("img")(Image);