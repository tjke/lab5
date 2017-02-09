var data = require("../data.json");

exports.addFriend = function(req, res) { 
	var name = req.query.name;
	var description = req.query.description;
	//var name = "New friend";
	//var description = "Friend description";
	var newFriend = {
		'name': name,
		'description': description,
		'imageURL': "http://lorempixel.com/400/400/people"
	}

	console.log(newFriend);

	data.friends.push(newFriend);

	// Your code goes here
	res.render('index', data);

	// take you back to the index route
	res.redirect('/');
 }