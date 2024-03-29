/**
 * Wishlists.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */


module.exports = {
  adapter: 'mongo',
  attributes: {
        name: 'STRING',

        wishes:{
                collection: 'wish',
		via: 'wishlist'
        },
        user:{
                model: 'user'
        },
        eventdate : 'STRING',
        type: 'STRING',
        description: 'STRING'
  }
};
