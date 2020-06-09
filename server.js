const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const {google} = require('googleapis');
const axios = require("axios");
const path = require('path');
const { gen_body } = require('./message');
const { get_all } = require('./recipients');
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
  let emails = req.body.emails;
  let scope = req.body.scope;
  // console.log(req.body);
  if (!code) {
    res.status(400);
    res.send("Google Auth Code not found")
    return;
  }

  if (!emails) {
    res.status(400);
    res.send("Emails not found")
    return;
  }

  let all = get_all();
  let all_dict = {};
  for (let rep of all) {
    all_dict[rep[2]] = rep;
  }

  oAuth2Client.getToken(code, (err, token) => {
    if (err) return console.error('Error retrieving access token', err);
    // oAuth2Client.setCredentials(token);
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token.access_token}`).then((user) => {

      for (let e of emails) {
        let recvArr = e.recipients.split(",");
        const utf8Subject = `=?utf-8?B?${Buffer.from(e.subject).toString('base64')}?=`;
        for (let rec of recvArr) {
          let recName = "";
          if (rec in all_dict) {
            recName = all_dict[rec];
          }
          const body = e.body.replace("{RECIPIENT}", recName).replace("{YOUR NAME}", user.data.name);
          let to = `To: <${rec}>`;
          if (rec in all_dict) {
            to = `To: ${recName} <${rec}>`;
          }
          const messageParts = [
            `From: ${user.data.name} <${user.data.email}>`,
            to,
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
          });
        }
      }
      res.send("ok");
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