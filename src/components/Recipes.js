/* eslint-disable import/no-webpack-loader-syntax */
import React, { Fragment } from "react";
import { Link, Route } from "react-router-dom";
// import { Switch, Route, Link } from "react-router-dom";
import { Menu, Icon } from "antd";
import { Recipe } from "./Recipe";
import recipesData from "../data/recipes";

const SubMenu = Menu.SubMenu;

var selectedRecipe = "default";

function test(r) {
  selectedRecipe = r.recipe;
}
export const Recipes = ({ match }) => (
  <Fragment>
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "250px"
          }}
        >
          <Menu
            theme={"light"}
            // onClick={this.handleClick}
            style={{ width: 250 }}
            defaultOpenKeys={["sub1"]}
            // selectedKeys={[this.state.current]}
            mode="inline"
          >
            <SubMenu
              key="sauces"
              title={
                <span>
                  <Icon type="fire" />
                  <span>Sauces</span>
                </span>
              }
            >
              {recipesData.recipes.map((recipe, index) => {
                return (
                  <Menu.Item key={index}>
                    <Link
                      onClick={() => test({ recipe })}
                      to={`${match.url}/${recipe.ccName}`}
                    >
                      {recipe.name}
                    </Link>
                  </Menu.Item>
                );
              })}
            </SubMenu>
          </Menu>
        </div>
        <div style={{ flex: "1", padding: "20px" }}>
          <Route
            path={`${match.path}/${selectedRecipe.ccName}`}
            render={() => <Recipe selectedRecipe={selectedRecipe} />}
          />
        </div>
      </div>
    </div>
  </Fragment>
);
