const mailjet = require('node-mailjet').connect(
  'key',
  'key'
);

const send = function () {
  return mailjet.post('send', {version: 'v3.1'}).request({
    Messages: [
      {
        From: {Email: 'gillianbrame@gmail.com', Name: 'Rose'},
        To: [{Email: 'trigger@applet.ifttt.com'}],
        Subject: '#lovelight',
        TextPart: 'I am using Mailjet to trigger If This Then That, which takes care of turning on the light.'
      }
    ]
  })
};

module.exports = {send};