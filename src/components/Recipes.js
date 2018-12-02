/* eslint-disable import/no-webpack-loader-syntax */
import React, { Fragment } from "react";
// import { Switch, Route, Link } from "react-router-dom";
import { Route } from "react-router-dom";
// import BasicJalepenoHotSauce from "!babel-loader!mdx-loader!../data/recipes/basicJalepenoHotSauce.mdx";
// import LouisianaHotSauce from "!babel-loader!mdx-loader!../data/recipes/louisianaHotSauce.mdx";
// import SimpleSerranoHotSauce from "!babel-loader!mdx-loader!../data/recipes/simpleSerranoHotSauce.mdx";

export const RecipeList = ({ match }) => (
  <div>
    {/* <ul>
      <li>
        <Link to={`${match.url}/basicJalepenoHotSauce`}>
          Basic Jalepeno Hot Sauce
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/louisianaHotSauce`}>Louisana Hot Sauce</Link>
      </li>
      <li>
        <Link to={`${match.url}/simpleSerranoHotSauce`}>
          Simple Serrano Hot Sauce
        </Link>
      </li>
    </ul> */}
    <div>
      <Route path={`${match.path}/:recipeId`} component={Recipe} />
    </div>
  </div>
);

const Recipe = ({ match }) => (
  <Fragment>
    <h4>Hot Sauce Recipes</h4>
    {/* <Switch>
      <Route path="/Recipes/basicJalepenoHotSauce" component={ScovilleScale} />
      <Route
        exact
        path="/Recipes/louisianaHotSauce"
        component={LouisianaHotSauce}
      />
      <Route
        exact
        path="/Recipes/simpleSerranoHotSauce"
        component={SimpleSerranoHotSauce}
      />
    </Switch> */}
  </Fragment>
);
