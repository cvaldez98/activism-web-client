import React from 'react'
import { Layout, Typography } from 'antd';
const { Title } = Typography;
const { Header, Footer, Content } = Layout;


function ThankYou() {
    return (
        <Layout id="thanksContainer">
            <Header><Title id = 'whn'>What Happens Next...</Title></Header>
            <Content id = "thanksContent">
                <li>All emails should have been sent. Check your sent box in your email to confirm.</li>
                <li>If you did not see your local representative listed, Find the <u>email addresses</u> of your <u>local police</u> department, local representatives, <u>county</u> representatives, <u>and state</u> representatives and submit them through <a href="https://forms.gle/Duy52iF4i5kvyb9K8">this form</a>.</li>
                <li>Share with this service with others.</li>
                <li>Check out <a href="https://github.com/cvaldez98/activism-web-client" target="_blank">ActivismBot's</a> Github.</li>
                <li><a href='https://how-can-i-help.github.io/' target="_blank">Learn more </a> about how you help end police brutality.</li>
                <li>Keep reporting abusive officers and <u>demanding they be fired and charged, not just 'investigated'.</u></li>
            </Content>
            <Header><Title id = "thanks">...Thank You!</Title></Header>
        </Layout>
    );
}

export default ThankYou;