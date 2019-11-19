import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

// import { Component } from 'react'; es6解构赋值
// // 等价于
// import React from 'react';
// const Component = React.Component;

class App extends Component {
  render() {
    return (
      <Layout>
        <h3
          style={{color:'#fff',display:'inline-block',background:'#001529',margin:'0'}}
        > 增值税发票动态监控系统 </h3>
        <Header className="header">
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
        </Header>
        <Layout>
          <Sider 
            width={200} 
            style={{ background: '#fff' }}
            collapsible={true}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    重点税源监控
                  </span>
                }
              >
                <Menu.Item key="1">成品油认证查询</Menu.Item>
                <Menu.Item key="2">风险纳税人查询</Menu.Item>
                <Menu.Item key="3">发票开具查询</Menu.Item>
                <Menu.Item key="4">发票抵扣查询</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="laptop" />
                    一户式查询
                  </span>
                }
              >
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />
                    宏观统计
                  </span>
                }
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;
