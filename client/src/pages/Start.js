import React from 'react';
import '../Credits'
import '../SampleEmail'
import { Layout, Menu, Button, Typography } from 'antd';
import Credits from '../Credits';
import SampleEmail from '../SampleEmail';
import * as QueryString from "query-string";
import Form from '../Form'
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography

// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

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
    <Form></Form>
  );
}

export default App;
