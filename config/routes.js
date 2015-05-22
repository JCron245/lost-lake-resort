module.exports = function(app) {

// routes to handle angular requests
app.get('/', function(req, res) {
	// index file and it's included angular app will be served
	res.sendfile('./public/index.html'); // load our public/index.html file
});
	
app.get('/send_mail', function(req, res) {
	// handle the mail call
	var transport = app.nodemailer.createTransport(); // end transport
	
	var mail_opts = {
		from: 'Lost Lakes River Resoirt <website@lostlakesriverresort.com>',
		to: 'chase@wreet.co', // list of receivers
		subject: 'Hey', 
		text: 'Hello world', // plaintext body
		html: '<b>Hello world</b>' // html body
	};
	
	transport.sendMail(mail_opts, function(err, info) {
		if (err){
			return console.log('Coul not send mail: ' + err);
		}
		console.log('Message sent: ' + info.response);
	}); // end sendMail block
	
	
});
// do the mail route
};