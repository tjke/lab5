// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	/*var imageURL = req.params.imageURL;
	var name = req.params.name;
	var description = req.params.description;*/

	console.log(data);
	res.render('index', data);
};