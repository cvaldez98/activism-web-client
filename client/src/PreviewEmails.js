import React from 'react';
import { Layout, Menu, Button, Typography, Divider } from 'antd';
import { PageHeader, Input, Checkbox, Space, Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import StartHeader from './Header'
import PlaceHolder from './PlaceHolder';

const { Title } = Typography

class Form extends React.Component {
    state = {
        approvedEmails: [],
        currEmail: 0,
        recpFull: this.props.emails[0].recipients,
        recpEmails: this.props.emails[0].recipients.map(val => val[2]).toString(),
        body: this.props.emails[0].body,
        subject: this.props.emails[0].subject,
    }

    decline = async () => {
      if (this.state.currEmail === this.props.emails.length - 1) {
        this.sendEmails();
        return
      }
      await this.setState({currEmail: this.state.currEmail + 1});
      this.setState({recpFull: this.props.emails[this.state.currEmail].recipients,
                    recpEmails: this.props.emails[this.state.currEmail].recipients.map(val => val[2]).toString(),
                    body: this.props.emails[this.state.currEmail].body,
                    subject: this.props.emails[this.state.currEmail].subject});
    }

    approve = async () => {
      let email = {
        body: this.state.body,
        subject: this.state.subject,
        recipients: this.state.recpEmails
      }
      await this.setState({approvedEmails: [...this.state.approvedEmails, email]});
      if (this.state.currEmail === this.props.emails.length - 1) {
        this.props.sendEmails(this.state.approvedEmails);
        return;
      } else {
        await this.setState({currEmail: this.state.currEmail + 1});
        this.setState({recpFull: this.props.emails[this.state.currEmail].recipients,
          recpEmails: this.props.emails[this.state.currEmail].recipients.map(val => val[2]).toString(),
          body: this.props.emails[this.state.currEmail].body,
          subject: this.props.emails[this.state.currEmail].subject});
      }
    }

    onChangeBody = (body) => {
      this.setState({body: body.target.value});
    }

    onChangeTo = (to) => {
      this.setState({recpEmails: to.target.value});
    }

    onChangeSubject = (subject) => {
      this.setState({subject: subject.target.value});
    }

    render() {
        return (
          <>
            <div className="preview-header">
              <Title level={4} style={{color: 'white', margin: 0}}>Emails Preview</Title>
              <Title level={4} style={{color: 'white', margin: 0}}>{this.state.currEmail+1}/{this.props.emails.length}</Title>
            </div>
            <div className="email-to">
              <div className="email-label">To:</div>
              <textarea
                className="text-input"
                value={this.state.recpEmails}
                onChange={this.onChangeTo}
              />
            </div>
            <div className="email-subject">
              <div className="email-label">Subject:</div>
              <input
                className="text-input"
                value={this.state.subject}
                onChange={this.onChangeSubject}
              />
            </div>
            <div style={{height: 1, backgroundColor: 'white', marginTop: 8, marginBottom: 8}}></div>
            <div className="email-body">
              <textarea
                className="text-input"
                value={this.state.body}
                onChange={this.onChangeBody}
              />
            </div>
            <div className="preview-header">
              <div style={{marginRight: 16}}>
              <Title level={4} style={{color: 'white', margin: 0}}>{this.state.currEmail+1}/{this.props.emails.length}</Title>
              </div>
              <div style={{color: 'red', backgroundColor: 'white'}}>
                {"Emails will only send after going through all " + this.props.emails.length + " and approving or declining"}
              </div>
              <div style={{display: 'flex', marginLeft: 16}}>
                <Button onClick={() => this.decline()}>Decline</Button>
                <Button onClick={() => this.approve()}>Approve</Button>
              </div>
            </div>
        </>
        );
    }   
};

export default Form; 