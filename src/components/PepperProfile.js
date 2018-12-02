import React, { Fragment } from "react";
import { Divider } from "antd";
import ScovilleScale from "./ScovilleScale";

export const PepperProfile = props => (
  <Fragment>
    <h2>{props.pepperSelectedForModal.name}</h2>
    <h4 style={{ fontStyle: "italic" }}>
      {props.pepperSelectedForModal.scientificName}
    </h4>
    <div className="Aligner">
      <img
        alt={
          props.pepperSelectedForModal.name +
          " " +
          props.pepperSelectedForModal.scientificName
        }
        style={{ minWidth: "100px", maxWidth: "100px" }}
        src={props.pepperSelectedForModal.imageURL}
      />
    </div>
    <div />
    <Divider />
    <p>
      <b>{"Heat Range: "}</b>
      {props.pepperSelectedForModal.scovilleLow}
      {" to "}
      {props.pepperSelectedForModal.scovilleHigh}
    </p>
    {props.pepperSelectedForModal.scovilleHigh && (
      <ScovilleScale
        minScovilleUnits={props.pepperSelectedForModal.scovilleLow}
        maxScovilleUnits={props.pepperSelectedForModal.scovilleHigh}
      />
    )}
    <p>{props.pepperSelectedForModal.description}</p>
  </Fragment>
);
