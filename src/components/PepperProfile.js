import React, { Fragment } from "react";
import { Divider } from "antd";
import ScovilleScale from "./ScovilleScale";

export const PepperProfile = props => (
  <Fragment>
    <h2>{props.individualPepper.name}</h2>
    <h4 style={{ fontStyle: "italic" }}>
      {props.individualPepper.scientificName}
    </h4>
    <div className="Aligner">
      <img
        alt={
          props.individualPepper.name +
          " " +
          props.individualPepper.scientificName
        }
        style={{ minWidth: "100px", maxWidth: "100px" }}
        src={props.individualPepper.imageURL}
      />
    </div>
    <div />
    <Divider />
    <p>
      <b>{"Heat Range: "}</b>
      {props.individualPepper.scovilleLow}
      {" to "}
      {props.individualPepper.scovilleHigh}
    </p>
    {props.individualPepper.scovilleHigh && (
      <ScovilleScale
        minScovilleUnits={props.individualPepper.scovilleLow}
        maxScovilleUnits={props.individualPepper.scovilleHigh}
      />
    )}
    <p>{props.individualPepper.description}</p>
  </Fragment>
);
