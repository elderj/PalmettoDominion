import React, { Fragment } from "react";

export const Recipe = props => (
  <Fragment>
    <h3>{props.selectedRecipe.name}</h3>

    <h4>Ingredients:</h4>
    <ul>
      {props.selectedRecipe.ingredients.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>;
      })}
    </ul>
    <br />
    <h4>DIrections:</h4>
    <ul>
      {props.selectedRecipe.directions.map((direction, index) => {
        return <li key={index}>{direction}</li>;
      })}
    </ul>
  </Fragment>
);
