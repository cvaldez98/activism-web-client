const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const {google} = require('googleapis');
const axios = require("axios");
const path = require('path');
const { gen_body } = require('./message');
require('dotenv').config()

const SCOPES = ['https://mail.google.com/',
'https://www.googleapis.com/auth/gmail.modify',
'https://www.googleapis.com/auth/gmail.compose',
'https://www.googleapis.com/auth/gmail.send',
'https://www.googleapis.com/auth/userinfo.email',
'https://www.googleapis.com/auth/userinfo.profile'];


const TEST_TO = 'aabuhash@stanford.edu';
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.SECRET_ID,
  process.env.REDIRECT_URI);

// console.log(oAuth2Client);

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.post('/send_emails', (req, res) => {
  let code = req.body.code;
  let subject = req.body.subject;
  let states = req.body.states;
  let scope = req.body.scope;

  if (!code) {
    res.statusCode(400);
    res.send("Google Auth Code not found")
    return;
  }

  if (!subject) {
    res.statusCode(400);
    res.send("Google Auth Code not found")
    return;
  }

  if (!states) {
    states = ['all'];
  }

  oAuth2Client.getToken(code, (err, token) => {
    if (err) return console.error('Error retrieving access token', err);
    // oAuth2Client.setCredentials(token);
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token.access_token}`).then((user) => {
      console.log(user.data);
    
      // You can use UTF-8 encoding for the subject using the method below.
      // You can also just use a plain string if you don't need anything fancy.
      const gmail = google.gmail('v1');

      const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
      const body = gen_body(user.data.name, 'Abdallah Abs');
      const messageParts = [
        `From: ${user.data.name} <${user.data.email}>`,
        'To: Abdallah AbuHashem <aabuhash@stanford.edu>',
        'Content-Type: text/html; charset=utf-8',
        'MIME-Version: 1.0',
        `Subject: ${utf8Subject}`,
        '',
        body.replace(/\n/g, '<br>')
      ];
      const message = messageParts.join('\n');

      // The body needs to be base64url encoded.
      const encodedMessage = Buffer.from(message)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');

      axios({
        method: 'post',
        url: `https://www.googleapis.com/gmail/v1/users/${user.data.id}/messages/send`,
        headers: {
          'Authorization': 'Bearer ' + token.access_token,
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          'raw': encodedMessage
        })
      })
      .then(re => {
        res.send('sup')
      })
      .catch(err => {
        res.send('sup')
      });
    })
  });
});

app.get('/get_auth_link', (req, res) => {
  // Authorize a client with credentials, then call the Gmail API.
  let authUrl = getNewToken();
  res.send({ authUrl: authUrl });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken() {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  return authUrl;
}