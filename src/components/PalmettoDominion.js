import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Col, Layout, Menu } from 'antd';
import { css } from 'emotion';

import HomePage from './HomePage';
import RecipesPage from './RecipesPage';
import GlossaryPage from './GlossaryPage';
import ContactPage from './ContactPage';

import logo from '../images/logo.png';

const { Header, Content } = Layout;

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
      <BrowserRouter>
        <Layout style={{ height: '100vh', backgroundColor: '#fff' }}>
          <Header
            style={{
              align: 'center',
              backgroundColor: '#FFFFFF',
              boxShadow: '0 2px 8px #010101',
              margin: 0,
              minWidth: '600px',
              padding: 0,
              height: '66px',
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
                  <Link to="/Glossary">
                    <span role="img" aria-label="Pepper">
                      🌶
                    </span>
                    Pepper Glossary
                  </Link>
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
                <Route path="/Recipes" component={RecipesPage} />
                <Route path="/Glossary" component={GlossaryPage} />
                <Route path="/Contact" component={ContactPage} />
              </Switch>
            </div>
            <div>
              <div className="Aligner">
                <div className="Aligner-item">
                  <h2>
                    <span role="img" aria-label="Pepper">
                      🌶
                    </span>{' '}
                    <span role="img" aria-label="Pepper">
                      🌶
                    </span>{' '}
                    <span role="img" aria-label="Pepper">
                      🌶
                    </span>{' '}
                    <span role="img" aria-label="Pepper">
                      🌶
                    </span>{' '}
                    <span role="img" aria-label="Pepper">
                      🌶
                    </span>
                  </h2>
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
