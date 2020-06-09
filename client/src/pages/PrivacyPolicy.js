import React from 'react';
import '../Credits'
import '../SampleEmail'
import { Layout, Menu, Button, Typography, PageHeader } from 'antd';
import Credits from '../Credits';
import SampleEmail from '../SampleEmail';
import 'antd/dist/antd.css';
import '../App.css';

const { Header, Footer, Sider, Content } = Layout;
const { Title,Paragraph } = Typography

let goToAuth = async () => {
  const response = await fetch('/get_auth_link');
  const body = await response.json();

  // console.log(body);
  if (response.status !== 200) {
    throw Error(body.message) 
  }
  window.open(body.authUrl)
};

function PrivacyPolicy(props) {
  console.log(props.location);
  return (
    <div className="container">
      <PageHeader
          style={{backgroundColor: 'white'}}
          className="site-page-header"
          onBack={() => window.open('/', '_self')}
          title="Privacy Policy"
      />
      <div className="content">
        <div className="main">
          <div className="action-list">
            <Content id='home' style={{ padding: '25px 50px', backgroundColor: '#003261'}}>
              <Title style={{ color: 'pink'}}>Privacy Policy</Title>
              <Title level={4} style={{ color: 'white'}}>Last updated: June 7, 2020</Title>
              <Paragraph level={4} style={{ textAlign: 'left', color: 'white'}}>Abdallah A AbuHashem and Carlos Valdez ("us", "we", or "our") operate http://www.activismbot.com/(the "Site"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site.
<br /><br/>
We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy.
              </Paragraph>
              <Title level={4} style={{ color: 'white'}}>Information Collection And Use</Title>
              <Paragraph level={4} style={{ textAlign: 'left', color: 'white'}}>While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information").</Paragraph>
              <Title level={4} style={{ color: 'white'}}>Log Data</Title>
              <Paragraph level={4} style={{ textAlign: 'left', color: 'white'}}>For the purposes of sending emails to your representatives and selected officials, we use Google API to get some of your data such as your name and gmail. We do NOT store any of the data after the emails have been sent. Additionally, we do NOT log any data about visitors or authorized users if a user does not click send email. For a closer look, our open-source codebase is at this link https://github.com/cvaldez98/activism-web-client. </Paragraph>
              <Title level={4} style={{ color: 'white'}}>Communications</Title>
              <Paragraph level={4} style={{ textAlign: 'left', color: 'white'}}>We will not use your email for any communications. As mentioned earlier, our site does not store any data. We only use it for the core feature of sending emails as explained on our homepage http://activismbot.com/. As stated earlier, feel free to check our open-source codebase at https://github.com/cvaldez98/activism-web-client.</Paragraph>
              <Title level={4} style={{ color: 'white'}}>Cookies</Title>
              <Paragraph level={4} style={{ textAlign: 'left', color: 'white'}}>We do not rely on cookies to store any data.</Paragraph>
              <Title level={4} style={{ color: 'white'}}>Security</Title>
              <Paragraph level={4} style={{ textAlign: 'left', color: 'white'}}>The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.</Paragraph>
              <Title level={4} style={{ color: 'white'}}>Changes To This Privacy Policy</Title>
              <Paragraph level={4} style={{ textAlign: 'left', color: 'white'}}>This Privacy Policy is effective as of June 7, 2020 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page.
              <br /><br/>
We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
<br /><br/>
If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website.
</Paragraph>
              <Title level={4} style={{ color: 'white'}}>Contact Us</Title>
              <Paragraph level={4} style={{ textAlign: 'left', color: 'white'}}>If you have any questions about this Privacy Policy, please contact us aabuhash@stanford.edu and carlosvr@utexas.edu.</Paragraph>
              
            </Content>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;