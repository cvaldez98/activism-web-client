import React from 'react';
import '../Credits'
import '../SampleEmail'
import { Layout, Menu, Button, Typography } from 'antd';
import Credits from '../Credits';
import SampleEmail from '../SampleEmail';
import * as QueryString from "query-string";
import Form from '../form'
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography

// Example POST method implementation:

function App(props) {
  //EXAMPLE REQUEST
  // postData('/send_emails', { code: 'suuuuuuuuuuuup', subject: 'subject', states:['California'], scopes: scopes })
  // .then(data => {
  //   console.log(data); // JSON data parsed by `response.json()` call
  // });
  const params = QueryString.parse(props.location.search);
  console.log(params);
  const code = params.code;
  const scopes = params.scope;
  return (
    <Form code={{ code }} scopes={{ scopes }}></Form>
  );
}

export default App;
