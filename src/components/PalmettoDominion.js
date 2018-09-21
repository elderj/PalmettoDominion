import React from 'react';
import { Col, Layout, Menu, Row } from 'antd';
import { css } from 'emotion';

import logo from '../images/logo.png';

const { Header, Content } = Layout;

// const navBar = css`
//   background: #fff;
//   box-shadow: 0 2px 8px #ff0000;
//   position: fixed;
//   padding: 0;
//   margin: 0;
//   z-index: 10;
// `;

const leftNavBar = css`
  display: flex;
  // background: #00ff00;
  alight-items: left;
  justify-content: flex-end;
  height: 64px;
  min-width: 300px;
`;

const rightNavBar = css`
  display: flex;
  background: #00ff00;
  alight-items: left;
  justify-content: flex-end;
  height: 64px;
  min-width: 100px;
`;

class PalmettoDominion extends React.Component {
  render() {
    return (
      <Layout>
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
          <Col className={leftNavBar} span={12}>
            {' '}
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
          </Col>
        </Header>
        <Content>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <p>Content</p>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default PalmettoDominion;
