var Backbone = require('backbone');


var PersonItem = Backbone.Model.extend({
  idAttribute: '_id'
});


var PersonCollection = Backbone.Collection.extend({
  model: PersonItem,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/ryanbarroncodeblog'
});

module.exports = {
  PersonItem: PersonItem,
  PersonCollection: PersonCollection
};
