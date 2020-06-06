import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import './styles.css';
import './Credits'
import './SampleEmail'
import { Layout, Menu, Button, Typography } from 'antd';
import Credits from './Credits';
import SampleEmail from './SampleEmail';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography

function App() {
  return (
    <Layout className="layout" style={{ opacity:'0.8'}}>
      <meta></meta>
     <Header>
       <div className="logo" />
       <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
         <Menu.Item key="1"><a href='#home'>Home</a></Menu.Item>
         <Menu.Item key="2"> <a href='#about'></a>About</Menu.Item>
         <Menu.Item key="3"> <a href='https://how-can-i-help.github.io/' target="_blank"> Resources </a> </Menu.Item>
         <Menu.Item key="4">Submit a representative</Menu.Item>
       </Menu>
     </Header>
    <Layout>
      <Content id='home' style={{ padding: '25px 50px', backgroundColor: '#003261'}}>
            <Title style={{ color: 'pink'}}>Reach out to your representatives quickly and efficiently.</Title>
            {/* <h1>Send email to your elected representatives quickly.</h1> */}
            <Title level={2} style={{ color: 'white'}}>In light of recent events, We have created this tool to send emails 
              (using the template from nomoreracistcops.github.io) to a list of <b>188</b> elected US officials.
              </Title>
              <Title level={3} style={{ textAlign: 'left', color: 'white'}}>How to use this page:</Title>
            <ol>
              <li>Find the <u>email addresses</u> of your <u>local police</u> department, local representatives, <u>county</u> representatives, <u>and state</u> representatives</li>
              <li>Copy and paste the scripts below</li>
              <li><u>Modify scripts to reflect your beliefs</u>.</li>
              <li>Send</li>
              <li>Share with others</li>
              <li>Keep reporting abusive officers and <u>demanding they be fired and charged, not just 'investigated'</u></li>
            </ol>
        <Button type="primary" style={{ textAlign: 'right'}}> Get Started</Button>
      </Content>
      <Sider width='700' style={{ textAlign: 'center', padding: '25px 50px' }}>
        <SampleEmail></SampleEmail>
      </Sider>
    </Layout>

     <Footer style={{ textAlign: 'center' }}>
      <Title level={3} id='about' style={{ padding: '25px 0px 25px'}}> Big thanks to those who are helping make this possible.</Title>
       <Credits></Credits>
     </Footer>
   </Layout>
  );
}

export default App;
