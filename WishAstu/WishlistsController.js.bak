/**
 * WishlistsController
 *
 * @description :: Server-side logic for managing wishlists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
   index: function(req, res) {
    res.view({
      user: req.user
    });
  },
create: function(req,res){
	var ObjectId = require('mongodb').ObjectID;
	var data = {name : req.body.name};
	console.log(req.user.id);
	var objectId = new ObjectId(req.user.id);
	console.log(objectId);
	var user = User.findOne({"uid" : req.user.uid}).exec(function(err,user){
		 if (err) {
    	
  }
  if (!user) {
    return res.notFound('Could not find Finn, sorry.');
  }

  console.log('Found "%s"', user.name);
  		data.user = user;
		console.log(data);
		Wishlists.create(data, function(err, wishlists){
                console.log("ho gaya");
                return wishlists;
        });
        });
	console.log(user);
	data.user = user;

   }

};

