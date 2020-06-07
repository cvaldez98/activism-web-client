const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');
const axios = require("axios");
const Base64 = require('js-base64').Base64;
const MIMEText = require('mimetext')

const SCOPES = ['https://mail.google.com/',
'https://www.googleapis.com/auth/gmail.modify',
'https://www.googleapis.com/auth/gmail.compose',
'https://www.googleapis.com/auth/gmail.send',
'https://www.googleapis.com/auth/userinfo.email'];

const TEST_TO = 'aabuhash@stanford.edu';
const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  SECRET_ID,
  'http://localhost:3000/start');

// console.log(oAuth2Client);


// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
// app.get('/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });

app.get('/oauth2callback', (req, res) => {
  let code = req.query.code;
  let scope = req.query.scope;

  oAuth2Client.getToken(code, (err, token) => {
    if (err) return console.error('Error retrieving access token', err);
    // oAuth2Client.setCredentials(token);
    console.log(token);
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token.access_token}`).then((user) => {
      console.log(user.data);
    
      // You can use UTF-8 encoding for the subject using the method below.
      // You can also just use a plain string if you don't need anything fancy.
      const gmail = google.gmail('v1');

      const subject = '🤘 Hello Abdallah and World 🤘';
      const utf8Subject = `=?utf-8?B?${Buffer.from(subject).toString('base64')}?=`;
      const messageParts = [
        `From: Abdallah AbuHashem <${user.data.email}>`,
        'To: Abdallah AbuHashem <aabuhash@stanford.edu>',
        'Content-Type: text/html; charset=utf-8',
        'MIME-Version: 1.0',
        `Subject: ${utf8Subject}`,
        '',
        'This is a message just to say hello.',
        'So... <b>Hello!</b>  🤘❤️😎',
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
        console.log(re);
        res.send('sup')
      })
      .catch(err => {
        console.log(err);
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

// /**
//  * Create an OAuth2 client with the given credentials, and then execute the
//  * given callback function.
//  * @param {Object} credentials The authorization client credentials.
//  * @param {function} callback The callback to call with the authorized client.
//  */
// function authorize(credentials) {
//   let authUrl = getNewToken(oAuth2Client);
//   return authUrl;
// }

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

/**
 * Lists the labels in the user's account.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listLabels(auth) {
  const gmail = google.gmail({version: 'v1', auth});
  gmail.users.labels.list({
    userId: 'me',
  }, (err, res) => {
    if (err) return console.log('The API returned an error: ' + err);
    const labels = res.data.labels;
    if (labels.length) {
      console.log('Labels:');
      labels.forEach((label) => {
        console.log(`- ${label.name}`);
      });
    } else {
      console.log('No labels found.');
    }
  });
}