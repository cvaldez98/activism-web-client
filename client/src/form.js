import React from 'react';
import { Layout, Menu, Button, Typography } from 'antd';
import SampleEmail from './SampleEmail';
import { PageHeader, Input, Checkbox, Space } from 'antd';


const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Texas', 'California', 'New York'];

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

class Form extends React.Component {
    state = {
        checkedList: [],
        indeterminate: true,
        checkAll: true,
        subject: ''
    }

    onChange = checkedList => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
            checkAll: checkedList.length === plainOptions.length,
        })
    }

    onHandleSubject = e => {
        this.state.subject = e.target.value
    }

    onCheckAllChange = e => {
        this.setState({
          checkedList: e.target.checked ? plainOptions : [],
          indeterminate: false,
          checkAll: e.target.checked,
        });
      };

    render() {
        return (
        <div>
        <Layout style={{ opacity:'0.8'}}>
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Select your representatives"
                subTitle="Check the states which you want to send emails to and add a subject line."
            />
        </Layout>
        <Space align='center'>
        <div className="site-checkbox-all-wrapper">

          <Checkbox
            indeterminate={this.state.indeterminate}
            onChange={this.onCheckAllChange}
            checked={this.state.checkAll}>
            Check all
          </Checkbox>
        </div>
        <CheckboxGroup
          options={plainOptions}
          onChange={this.onChange}
          style={{padding: '0 50px 0 50px'}}
        />        
        <Input 
            placeholder="Add a subject line" 
            width='100px'
            onChange={this.onHandleSubject}
            value={this.state.value}
        >
        </Input>
        <Button 
            onClick = { () => {postData('/send_emails', { code: this.props.code, subject: this.state.subject, states: this.state.checkedList, scopes: this.props.scopes}).then( data => console.log(data))}}
            className="mock-block">
                Send out emails</Button>
        </Space>
      </div>
    );
    };
}
export default Form;