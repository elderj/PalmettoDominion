import React, { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RecipeList } from "./Recipes";

const RecipesPage = () => (
  <Fragment>
    <br />
    <div className="Aligner">
      <div className="Aligner-item">
        <h1 className="font-actionj">Recipes</h1>
      </div>
      <br />
    </div>

    <div className="Aligner">
      <div
        className="Aligner-item"
        style={{
          backgroundColor: "#F0F0F0",
          width: "400vw",
          borderRadius: "25px",
          padding: "8px"
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",

            borderRadius: "20px",
            padding: "8px"
          }}
        >
          <Router>
            <div>
              <h2>Hot Sauces:</h2>
              <Route path="/Recipes" component={RecipeList} />
            </div>
          </Router>
        </div>
      </div>
    </div>
    <br />
  </Fragment>
);

export default RecipesPage;
