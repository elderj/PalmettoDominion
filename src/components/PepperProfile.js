import React, { Fragment } from "react";
import { Divider } from "antd";

export const PepperProfile = props => (
  <Fragment>
    <h2>{props.pepperSelectedForModal.name}</h2>
    <h4 style={{ fontStyle: "italic" }}>
      {props.pepperSelectedForModal.scientificName}
    </h4>
    <div className="Aligner">
      <img
        style={{ minWidth: "100px", maxWidth: "100px" }}
        src={props.pepperSelectedForModal.imageURL}
      />
    </div>

    <div />
    <Divider />
    <p>{props.pepperSelectedForModal.description}</p>
  </Fragment>
);
