import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import './styles.css';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout className="layout">
      <meta></meta>
     <Header>
       <div className="logo" />
       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
         <Menu.Item key="1">Home</Menu.Item>
         <Menu.Item key="2">About</Menu.Item>
         <Menu.Item key="3">Resources</Menu.Item>
       </Menu>
     </Header>
    <Layout>
      <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <h1>Send email to your elected representatives quickly.</h1>.
        {/* <div className="site-layout-content">Content</div> */}
        <Button type="primary" style={{ textAlign: 'right'}}> Get Started</Button>
      </Content>
      <Sider style={{ textAlign: 'center' }}>
        <Button> Get Started</Button>
      </Sider>
    </Layout>

     <Footer style={{ textAlign: 'center' }}>Footer</Footer>
   </Layout>
  );
}

export default App;
