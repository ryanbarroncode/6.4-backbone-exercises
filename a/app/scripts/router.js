var Backbone = require('backbone');
var $ = require('jquery');

  var views = require('./views/blogviews.js');
// require the view
var AppRouter = Backbone.Router.extend({
  routes: {
  '': 'index',
},
  //instantiate the view
  initialize: function(){
  },
  index: function(){
    var blogPostCollection = new models.BlogCollection;
    var blogFormView = new views.BlogForm({collection: blogPostCollection});
    //inject the view into the html
    $('.blog-form-hb').append(blogFormView.render().$el);
  }
});

var router = new AppRouter();

module.exports = router;
