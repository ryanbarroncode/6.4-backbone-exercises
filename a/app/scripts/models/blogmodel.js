var Backbone = require('backbone');


var BlogItem = Backbone.Model.extend({
  idAttribute: '_id'
});


var BlogCollection = Backbone.Collection.extend({
  model: BlogItem,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/ryanbarroncodeblog'
});

module.exports = {
  BlogItem: BlogItem,
  BlogCollection: BlogCollection
}
