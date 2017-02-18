var Backbone = require('backbone');

var Blog = Backbone.Model.extend({
  idAttribute: '_id'
});

var BlogCollection = Backbone.Collection.extend({
  model: Blog,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/book/'
});

module.exports = {
  Blog: Blog,
  BlogCollection: BlogCollection
};
