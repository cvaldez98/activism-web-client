import React, {useState} from 'react';
import '../Credits'
import '../SampleEmail'
import { Layout, Menu, Button, Typography, PageHeader } from 'antd';
import Credits from '../Credits';
import PreviewEmails from '../PreviewEmails';
import * as QueryString from "query-string";
import Form from '../form'
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography
var messages = require('../message')

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
  return response; // parses JSON response into native JavaScript objects
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function App(props) {
  const params = QueryString.parse(props.location.search);
  const code = params.code;
  const scope = params.scope;
  const [preview, setPreview] = useState(false);
  const [emails, setEmails] = useState([]);

  if (!code) {
    alert("Please start with the home page and authorize using Google API!");
    window.open('/', '_self');
    return;
  }

  let generateEmails = (recv) => {
    let officials = [...recv];
    shuffle(officials);
    let limit = officials.length < 35 ? officials.length : 35;
    let seg = Math.floor(officials.length / limit);
    let emailsArr = [];
    for (let i = 0; i < limit; i++) {
      let emailBody = messages.gen_body('{YOUR NAME}', '{RECIPIENT}');
      let emailSubject = messages.gen_subject();
      let recipients = [];
      if (limit - 1 === i) {
        recipients = [...officials];
      } else {
        recipients = officials.splice(0, seg);
      }
      emailsArr.push({body: emailBody, subject: emailSubject, recipients: recipients});
    }
    setEmails(emailsArr);
    // console.log(emailsArr);
  }

  let togglePreview = (officials) => {
    if (officials.length === 0) {
      alert("You need to have at least 1 state selected!");
      return;
    }
    if (!preview) {
      generateEmails(officials);
    }
    setPreview(true);
    // console.log(preview);
  }

  let sendEmails = (emails) => {
    if (emails.length === 0) {
      alert("You have declined all emails. No emails will be sent");
      return;
    }
    postData('/send_emails', {code: code, scope: scope, emails: emails})
    .then(res => {
      console.log(res);
      window.open('/thanks', '_self');
    })
    .catch(err => {
      console.log(err);
      alert('Something went wrong. Please try again')
    });
  }

  return (
    <div className="container">
      <PageHeader
          style={{backgroundColor: 'white'}}
          className="site-page-header"
          onBack={() => window.open('/', '_self')}
          title="Send Emails"
          subTitle="Check the states which you want to send emails to and hit send for the emails."
      />
     <div className="content">
        <div className="main">
          <div className="action-list">
            <Form code={{ code }} scopes={{ scope }} togglePreview={togglePreview}></Form>
          </div>
          <div id="example" className="example-email preview" style={{padding: 0}}>
            {emails.length !== 0 && <PreviewEmails emails={emails} sendEmails={sendEmails}/>}
            {emails.length === 0 && <div style={{color: 'white', fontSize: 18, display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
              Your drafts will appear here once you select states and click "Generate Drafts" on the left
            </div>}
          </div>
        </div>
     </div>
    </div>
  );
}

export default App;
