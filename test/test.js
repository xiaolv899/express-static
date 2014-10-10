var express	= require('express');
var static	= require('../index');

var app = express();

app.use(static(__dirname + '/public'));

var server = app.listen(5000, function(){
	console.log('server is running at %s', server.address().port);
});
