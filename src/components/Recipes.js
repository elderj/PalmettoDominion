/* eslint-disable import/no-webpack-loader-syntax */
import React, {Fragment} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {Divider} from 'antd'
import BasicJalepenoHotSauce from '!babel-loader!mdx-loader!../data/recipes/basicJalepenoHotSauce.mdx';
import SimpleSerranoHotSauce from '!babel-loader!mdx-loader!../data/recipes/simpleSerranoHotSauce.mdx';


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
                <Link to={`${match.url}/basicJalepenoHotSauce`}>Basic Jalepeno Hot Sauce</Link>
            </li>
            <li>
                <Link to={`${match.url}/simpleSerranoHotSauce`}>Simple Serrano Hot Sauce</Link>
            </li>
        </ul>

        <Route path={`${match.path}/:topicId`} component={Topic} />
        <Route
            exact
            path={match.path}
            render={() => 
            <Fragment/>
        }
        />
    </div>
);

const Topic = ({ match }) => (
    <div>
        {/* match.params.topicId */}
        <Switch>
            <Route path="/Recipes/basicJalepenoHotSauce" component={BasicJalepenoHotSauce} />
            <Route exact path="/Recipes/simpleSerranoHotSauce" component={SimpleSerranoHotSauce} />
        </Switch>



    </div>
);
