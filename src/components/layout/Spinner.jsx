import React, { Fragment } from "react";
import spinner from "./spinner.gif";

export default () => (
  <Fragment>
    <h2 className="text-center font-bold text-2xl mb-4">Loading...</h2>
    <img
      src={spinner}
      className="rounded-lg"
      style={{ width: "200px", margin: "auto", display: "block" }}
      alt='Loading...'
    />
  </Fragment>
);
