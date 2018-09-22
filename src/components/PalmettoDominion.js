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
const leftNavBar = css`
  display: flex;
  // background: #00ff00;
  alight-items: left;
  justify-content: flex-end;
  height: 64px;
  min-width: 300px;
`;

class PalmettoDominion extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout style={{ height: '100vh', backgroundColor: '#FF7F50' }}>
          <Header
            style={{
              align: 'center',
              boxShadow: '0 2px 8px #010101',
              padding: 0,
              margin: 0,
              minWidth: '600px',
            }}
          >
            <Col className={leftNavBar} span={5}>
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

              <span style={{ color: '#f1f1f1', fontSize: '21px' }}>
                Palmetto Dominion
              </span>
            </Col>
            <Col span={12}>
              {' '}
              <Menu
                theme="dark"
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
                backgroundColor: '#F0F0F0',
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
          </Content>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default PalmettoDominion;
