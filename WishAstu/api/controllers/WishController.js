/**
 * WishController
 *
 * @description :: Server-side logic for managing wishes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
create: function(req,res){
        var ObjectId = require('mongodb').ObjectID;
	console.log(req);
        var data = {name : req.query.wish};
        var objectId = new ObjectId(req.query.wishlist);
        console.log(objectId);
        var user = Wishlists.findOne({"_id" : objectId}).exec(function(err,user){
                 if (err) {

  		}
		  if (!user) {
			    return res.notFound('Could not find Wishlist.');
 			 }

                data.wishlist = user;
                console.log(data);
                Wish.create(data, function(err, wishlists){
                console.log("ho gaya");
                return wishlists;
        });
        });

   }	
};

