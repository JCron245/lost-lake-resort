module.exports = function(app) {

// routes to handle angular requests
app.get('/', function(req, res) {
	// index file and it's included angular app will be served
	res.sendfile('./public/index.html'); // load our public/index.html file
});
	
app.post('/send_mail', function(req, res) {
	// handle the mail call
	var transport = app.nodemailer.createTransport(); // end transport
	
	var mail_opts = {
		from: req.body.firstn + ' ' + req.body.lastn + ' &#60;' + req.body.email + '&#62; ',
		to: 'lostlakeriverresort@gmail.com', // list of receivers
		subject: req.body.subject, 
		text: req.body.message, // plaintext body
		html: '<p>' + req.body.message + '</p>', // html body
	};
	
	transport.sendMail(mail_opts, function(err, info) {
		if (err){
			console.log('Could not send mail: ' + err);
			return res.render('#/contact', {msg: 'There was a problem sending the email!'});
		}
		res.render('#/contact', {msg: 'Your email has been sent!'});
		console.log('Message sent: ' + info.response);
	}); // end sendMail block
	
	
});
// do the mail route
};