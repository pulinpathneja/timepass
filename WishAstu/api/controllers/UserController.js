/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req,res){
		User.findOne({"uid": req.user.uid}).populate('lists').exec(function(err,user){
			console.log(user);
			res.send(JSON.stringify(user));
			
		});
	},
	friends: function(req,res){
		console.log(req);
		var graph = require('fbgraph');
		graph.setAccessToken(req.user.token);
		graph.get("/me/friends", function(err, user) {
  				console.log(user); // { image: true, location: "http://profile.ak.fb..." }
				res.send(JSON.stringify(user));
		});
	}
};

