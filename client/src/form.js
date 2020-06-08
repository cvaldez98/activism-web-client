import React from 'react';
import { Layout, Menu, Button, Typography, Divider } from 'antd';
import { PageHeader, Input, Checkbox, Space, Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import StartHeader from './Header'

var recipients = require('./recipients')

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography
const CheckboxGroup = Checkbox.Group;
const plainOptions = recipients.get_states();
const { Text } = Typography;

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

    onSubmit = postData;

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
        <div className="container"> 
            <StartHeader></StartHeader>
            

            <Divider orientation="left" plain>
              Check the states you want to reach out to. 
            </Divider>
            <Checkbox
                indeterminate={this.state.indeterminate}
                onChange={this.onCheckAllChange}
                checked={this.state.checkAll}>
                Check all
            </Checkbox>
            <CheckboxGroup
            options={plainOptions}
            onChange={this.onChange}
            style={{padding: '0 50px 0 50px'}}/>    
            <Divider orientation="left" plain>
              Add a subject line.
            </Divider>    
                <Input 
                    placeholder='' 
                    width='100px'
                    onChange={this.onHandleSubject}
                    value={this.state.value}>
                </Input>
              <Divider orientation='left' plain>
                Make your voice heard.
            </Divider>
              <Button onClick= {() => {postData('/send_emails', { code: this.props.code, subject: this.state.subject, states: this.state.checkedList, scopes: this.props.scopes}).then( data => console.log(data))}} className="mock-block">
                      Send out emails
              </Button>
        </div>
        );
    }   
};

export default Form; 