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
			return user;
		});
	}	
};

