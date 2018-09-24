import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Col, Layout, Menu, Row } from 'antd';
import { css } from 'emotion';

import HomePage from './HomePage';
import Recipes from './Recipes';
import Glossary from './Glossary';
import Contact from './Contact';

import logo from '../images/logo.png';

const { Header, Content } = Layout;

//TODO: Make Styles consistent
const navContentLeft = css`
  display: flex;
  alight-items: left;
  justify-content: flex-end;
  height: 64px;
  min-width: 75px;
`;

class PalmettoDominion extends React.Component {
  render() {
    return (
      <BrowserRouter basename={'/PalmettoDominion'}>
        <Layout style={{ height: '100vh', backgroundColor: '#F0F0F0' }}>
          <Header
            style={{
              align: 'center',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 2px 8px #010101',
              margin: 0,
              minWidth: '600px',
              padding: 0,
            }}
          >
            <Col className={navContentLeft} span={1}>
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
            </Col>
            <Col span={12}>
              <Menu
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">
                  <Link to="/">Home</Link>
                </Menu.Item>

                <Menu.Item key="2">
                  <Link to="/Recipes">Recipes</Link>
                </Menu.Item>
                <Menu.Item key="/Glossary">
                  <Link to="/Glossary">🌶Pepper Glossary</Link>
                </Menu.Item>
                <Menu.Item key="/Contact">
                  <Link to="/Contact">Contact</Link>
                </Menu.Item>
              </Menu>
            </Col>
          </Header>
          <Content>
            <div
              style={{
                background: 'padding: 24, minHeight: 280',
                backgroundColor: '#FF7F50',
                height: '100',
              }}
            >
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/Recipes" component={Recipes} />
                <Route path="/Glossary" component={Glossary} />
                <Route path="/Contact" component={Contact} />
              </Switch>
            </div>
            <div>
              <div className="Aligner">
                <div className="Aligner-item">
                  <h2>🌶 🌶 🌶 🌶 🌶</h2>
                </div>
              </div>
              <div className="Aligner">
                <div className="Aligner-item">
                  <p>© 2018 Palmetto Dominion</p>
                </div>
              </div>
            </div>
          </Content>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default PalmettoDominion;
