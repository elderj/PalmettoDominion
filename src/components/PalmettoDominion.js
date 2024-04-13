import React from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import { Col, Icon, Layout, Menu } from "antd";
import { css } from "emotion";

import HomePage from "./HomePage";
import PepperPage from "./PepperPage";
import RecipesPage from "./RecipesPage";

import logo from "../images/logo.png";

const { Header, Content } = Layout;

const CurrentYear = new Date().getFullYear();

//TODO: Make Styles consistent
const navContentLeft = css`
  display: flex;
  alight-items: left;
  justify-content: flex-end;
  min-width: 75px;
`;
class PalmettoDominion extends React.Component {
  render() {
    return (
      <HashRouter>
        <Layout style={{ height: "100vh", backgroundColor: "#fff" }}>
          <Header
            style={{
              align: "center",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 2px 8px #010101",
              margin: 0,
              minWidth: "600px",
              padding: 0,
              height: "66px",
            }}
          >
            <Col className={navContentLeft} span={1}>
              <Link to="/">
                <img
                  src={logo}
                  alt="Palmetto Dominion Hot Sauce Bottle"
                  style={{
                    height: 48,
                    marginTop: 12,
                    marginLeft: 16,
                    marginRight: 16,
                    marginBottom: 12,
                  }}
                />
              </Link>
            </Col>
            <Col span={12}>
              <Menu
                mode="horizontal"
                defaultSelectedKeys={["1"]}
                style={{ lineHeight: "64px" }}
              >
                <Menu.Item key="1">
                  <Link to="/">
                    <Icon type="home" theme="twoTone" twoToneColor="#37B079" />
                    Home
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/Peppers">
                    <Icon type="fire" theme="twoTone" twoToneColor="#FF7F50" />
                    Peppers
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/Recipes">
                    <Icon
                      type="experiment"
                      theme="twoTone"
                      twoToneColor="#0F0F0F"
                    />
                    Recipes
                  </Link>
                </Menu.Item>
                {/* <Menu.Item key="4">
                  <Link to="/Glossary">
                    <Icon
                      type="profile"
                      theme="twoTone"
                      twoToneColor="#FFB350"
                    />
                    Glossary
                  </Link>
                </Menu.Item> */}
                {/* <Menu.Item key="5">
                  <Link to="/Contact">
                    <Icon type="phone" theme="twoTone" twoToneColor="#3A78A4" />
                    Contact
                  </Link>
                </Menu.Item> */}
              </Menu>
            </Col>
          </Header>
          <Content>
            <div
              style={{
                background: "padding: 24, minHeight: 280",
                backgroundColor: "#FF7F50",
                height: "100",
              }}
            >
              <Switch path="/">
                <Route exact path="/" component={HomePage} />
                <Route path="/Peppers" component={PepperPage} />
                <Route path="/Recipes" component={RecipesPage} />
                {/* <Route path="/Glossary" component={GlossaryPage} /> */}
                {/* <Route path="/Contact" component={ContactPage} /> */}
              </Switch>
            </div>
            <div>
              <div className="Aligner">
                <div className="Aligner-item">
                  <h2>
                    <span role="img" aria-label="Pepper">
                      🌶
                    </span>{" "}
                    <span role="img" aria-label="Pepper">
                      🌶
                    </span>{" "}
                    <span role="img" aria-label="Pepper">
                      🌶
                    </span>{" "}
                    <span role="img" aria-label="Pepper">
                      🌶
                    </span>{" "}
                    <span role="img" aria-label="Pepper">
                      🌶
                    </span>
                  </h2>
                </div>
              </div>
              <div className="Aligner">
                <div className="Aligner-item">
                  <p>©{CurrentYear} Elder Design Concepts LLC</p>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </HashRouter>
    );
  }
}

export default PalmettoDominion;
