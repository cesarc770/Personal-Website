const transporter = require('../services/Nodemailer');
var path = require('path');
var keys = require('../config/keys');

module.exports = function(app){

	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname, "../public/index.html"));
	});

	app.get('/success', function(req, res){
		res.sendFile(path.join(__dirname, "../public/success.html"));
	});

	app.post('/message', function( req, res){
		var mailOptions = {
		  from: keys.mailUser,
		  to: keys.mailUser,
		  subject: 'New message from website from: '+ req.body.name,
		  text: JSON.stringify(req.body)
		};

		transporter.sendMail(mailOptions, function(error, info){
		  if (error) {
		    console.log(error);
		  } else {
		    console.log('Email sent: ' + info.response);
		    res.redirect('/success');
		  }
		});
		
	})
	
};