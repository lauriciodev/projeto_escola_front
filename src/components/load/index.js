import React from "react";
import PropTypes from "prop-types";
import { Container, Load } from "./styled";

export default function Loading({ isLoading }) {
  // eslint-disable-next-line
  if (!isLoading) return <></>;

  return (
    <Container>
      <div>
        <Load />
      </div>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
