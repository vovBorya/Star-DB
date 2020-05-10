import React from "react";

const withChildFunction = (Wrapped, func) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {func}
      </Wrapped>
    )
  }
}

export default withChildFunction;