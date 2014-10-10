var fs 		= require('fs');
var path	= require('path');

module.exports = function(root){
	return function(req, res, next){
		var url = req.url;
		if(/\/$/.test(url)) url += 'index.html';
		var filename = path.join(root, url);
		fs.exists(filename, function(exists){
			if(exists){
				fs.readFile(filename, { encoding: 'utf-8' }, function(err, data){
					res.send(data);
				});
			}else{
				next();
			}
		});
	};
};
