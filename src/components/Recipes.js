/* eslint-disable import/no-webpack-loader-syntax */
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HelloWorld from '!babel-loader!mdx-loader!../data/recipes/simpleSerranoHotSauce.mdx';

export const Recipes = () => (
    <Router>
        <div>
            <Route path="/Recipes" component={RecipeList} />
        </div>
    </Router>
);

export const RecipeList = ({ match }) => (
    <div>

        <ul>
            <li>
                <Link to={`${match.url}/simpleSerranoHotSauce`}>Simple Serrano Hot Sauce</Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>Components</Link>
            </li>
        </ul>

        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route
            exact
            path={match.path}
            render={() => <h3>Please select a topic.</h3>}
        />
    </div>
);

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId === 'simpleSerranoHotSauce' ? (<HelloWorld/>) : (<p>Not it </p>)}</h3>
    </div>
);
