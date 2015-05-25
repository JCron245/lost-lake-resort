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
		from: req.body.firstn + ' ' + req.body.lastn + ' &#60;' + req.body.email,
		to: 'lostlakeriverresort@gmail.com', // list of receivers
		subject: req.body.subject, 
		text: req.body.message, // plaintext body
		html: '<body style="background-color: #EEE; color: #000;"><p>' + req.body.message + '</p></body>', // html body
	};
	
	transport.sendMail(mail_opts, function(err, info) {
		if (err){
			console.log('Could not send mail: ' + err);
			res.redirect('#/thank-you/fail');
		}
		console.log('Message sent: ' + info.response);
		res.redirect('/#/thank-you');
	}); // end sendMail block
	
	
});
// do the mail route
};
