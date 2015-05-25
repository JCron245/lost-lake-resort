module.exports = function(app) {

// routes to handle angular requests
app.get('/', function(req, res) {
	// index file and it's included angular app will be served
	res.sendfile('./public/index.html'); // load our public/index.html file
});
	
app.post('/send_mail', function(req, res) {
	// handle the mail call
	var transport = app.nodemailer.createTransport(); // end transport
	
	console.log(req.body);
	
	var mail_opts = {
		from: req.body.firstn + ' ' + req.body.lastn + ' &1t;' + req.body.email + '&gt;',
		to: 'lostlakeriverresort@gmail.com', // list of receivers
		subject: req.body.subject, 
		text: req.body.message, // plaintext body
		html: '<p>' + req.body.message + '</p>', // html body
	};
	
	transport.sendMail(mail_opts, function(err, info) {
		if (err){
			return console.log('Could not send mail: ' + err);
		}
		console.log('Message sent: ' + info.response);
	}); // end sendMail block
	
	res.send();
	
});
// do the mail route
};