import React from 'react';
import '../Credits'
import '../SampleEmail'
import { Layout, Menu, Button, Typography } from 'antd';
import Credits from '../Credits';
import SampleEmail from '../SampleEmail';
import 'antd/dist/antd.css';
import '../App.css';

const { Header, Content } = Layout;
const { Title } = Typography

let goToAuth = async () => {
  const response = await fetch('/get_auth_link');
  const body = await response.json();

  // console.log(body);
  if (response.status !== 200) {
    throw Error(body.message) 
  }
  window.open(body.authUrl)
};

function App(props) {
  console.log(props.location);
  return (
    <div className="container">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><a href='#home'>Home</a></Menu.Item>
          <Menu.Item key="2"> <a href='#about'></a>About</Menu.Item>
          <Menu.Item key="3"> <a href='https://how-can-i-help.github.io/' target="_blank" rel="noopener noreferrer"> Resources </a> </Menu.Item>
          <Menu.Item key="4"> <a href="https://forms.gle/Duy52iF4i5kvyb9K8">Submit a representative</a></Menu.Item>
          <Menu.Item key="5"> <a onClick={() => window.open('/privacy-policy', '_self')}>Privacy Policy</a></Menu.Item>
          <Menu.Item key="6"> <a onClick={() => window.open('/terms-service', '_self')}>Terms of Service</a></Menu.Item>
        </Menu>
      </Header>
      <div className="content">
        <div className="main">
          <div className="action-list">
            <Content id='home' style={{ padding: '25px 50px', backgroundColor: '#003261'}}>
              <Title style={{ color: 'pink'}}>Reach out to your representatives quickly and efficiently.</Title>
              <Title level={4} style={{ color: 'white'}}>In light of recent events, We have created this tool to send emails 
                (using the template from nomoreracistcops.github.io) to a list of <b>188</b> elected US officials.
                These emails will be generated by <b><a href="https://github.com/alandgton/activism-mailbot">mail-bot</a></b>, which will be automatically sent to the representatives selected through your app.
              </Title>
              <Title level={4} style={{ textAlign: 'left', color: 'white'}}>How to use this page:</Title>
              <ol>
                <li>Click the 'Get Started' button.</li>
                <li>This will ask you to sign in with a Google account of your choice.</li>
                <li>You will then be redirected to a page where you can <u>select which representatives</u> you wish to send your emails to. You will also be able to specify the subject and body of the email.</li>
                <li>Hit send and your emails should start being sent! </li>
                <li>Additionally, if you don't see your local representative listed, Find the <u>email addresses</u> of your <u>local police</u> department, local representatives, <u>county</u> representatives, <u>and state</u> representatives and submit them through <a href="https://forms.gle/Duy52iF4i5kvyb9K8">this form.</a></li>
                <li>Share with others</li>
                <li>Keep reporting abusive officers and <u>demanding they be fired and charged, not just 'investigated'</u></li>
              </ol>
              <Button onClick={() => goToAuth()} style={{ marginTop: '20px' }}type='primary' size='large' block> Let's get started </Button>
            </Content>
          </div>
          <div id="example" className="example-email">
            <SampleEmail></SampleEmail>
          </div>
        </div>
      </div>
      <div className="footer">
        <Title level={2} id='about'> Big thanks to those who are helping make this possible.</Title>
        <Credits></Credits>
      </div>
    </div>
  );
}

export default App;