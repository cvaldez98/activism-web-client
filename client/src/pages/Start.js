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

function App(props) {
  const params = QueryString.parse(props.location.search);
  console.log(params);
  const code = params.code;
  const scopes = params.scope;
  return (
    <Form code={{ code }} scopes={{ scopes }}></Form>
  );
}

export default App;
