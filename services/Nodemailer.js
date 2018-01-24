var nodemailer = require('nodemailer');
var keys = require('../config/keys');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: keys.mailUser,
    pass: keys.mailPassword
  }
});


module.exports = transporter;
