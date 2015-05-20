module.exports = function(app) {

// sample api route
app.get('/api/', function(req, res) {
	
});

// routes to handle angular requests
app.get('/', function(req, res) {
	// index file and it's included angular app will be served
	res.sendfile('./public/index.html'); // load our public/index.html file
});

};