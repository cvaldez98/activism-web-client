import React from 'react';
import { Layout, Button, Typography, Divider } from 'antd';
import { Checkbox } from 'antd';
import StartHeader from './Header'

var recipients = require('./recipients')

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography
const CheckboxGroup = Checkbox.Group;
const plainOptions = recipients.get_states();

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
        checkedList: [...plainOptions],
        officials: [...recipients.get_all()],
        indeterminate: true,
        checkAll: true,
        subject: ''
    }

    changeSelect = async (st) => {
      console.log(st);
      let idx = this.state.checkedList.indexOf(st);
      if (idx === -1) {
        await this.setState({checkedList: [...this.state.checkedList, st]});
      } else {
        let list = this.state.checkedList;
        list.splice(idx,1);
        await this.setState({checkedList: [...list]});
      }

      let recv = [];
      for (let s of this.state.checkedList) {
        recv = recv.concat(recipients.get_state(s));
      }
      this.setState({officials: recv});
    }

    render() {
        return (
        <div className="container">
          <Content id='home' style={{ padding: '25px 50px', backgroundColor: '#003261'}}>
            <Title style={{ color: 'pink'}}>Welcome!</Title>
            <Title level={4} style={{ color: 'white'}}>This tool helps you draft emails to send to officials in the US. You have 2 required actions to send emails</Title>
            <ol>
              <li>Choose states from below: By choosing the states from the list below, we select all officials we know of and prepare their mailing addresses. You can review the list of emails in the other grayed out list below.</li>
              <li>Once you hit "Next" button below, we will generate drafts for you on the right. You can review the reciepients, subject and content of the email on the right before hitting send.</li>
            </ol>
            <Divider />
            <div className="side-lists">
              <div className="select-states">
                <div className="label">To start, please select the states to which you want to email officials:</div>
                <div style={{height: 200, overflowY: 'scroll'}}>
                  {plainOptions.map((state) =>
                    <div onClick={() => this.changeSelect(state)} className="state-select" style={{fontWeight: this.state.checkedList.indexOf(state) === -1 ? 'normal' : 'bold'}}>
                      <div>{state}</div>
                      {this.state.checkedList.indexOf(state) !== -1 && <div>✓</div>}
                    </div>
                  )}
                </div>
              </div>
              <div className="show-reps">
                <div className="label">Receipients of the selected states:</div>
                <div style={{height: 220, overflowY: 'scroll'}}>
                  {this.state.officials.map((off) =>
                    <div className="state-select" style={{backgroundColor: '#CCCCCC'}}>
                      <div>{off[0]+" <" + off[2] + ">"}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="next-container">
              <Button onClick={() => this.props.togglePreview(this.state.officials)}>Generate Drafts</Button>
            </div>
          </Content>
        </div>
        );
    }   
};

export default Form; 