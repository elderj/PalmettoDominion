import React from 'react';
import { Col, Layout, Menu, Row } from 'antd';
import { css } from 'emotion';

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
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">Home</Menu.Item>
              <Menu.Item key="2">Recipes</Menu.Item>
              <Menu.Item key="3">🌶Pepper Glossary</Menu.Item>
              <Menu.Item key="4">Contact</Menu.Item>
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
            <p>Content</p>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default PalmettoDominion;
