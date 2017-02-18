var Backbone = require('backbone');
var $ = require('jquery');

var views = require('./views/blog_view.js');
var models = require('./models/blog_models.js');

var blogListTemplate = require('../templates/blog_list.hbs');
var blogPostTemplate = require('../templates/blog_post.hbs');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'blog/:id/': 'showBlog'
  },
  initialize: function(){
  this.blogPost = new models.BlogCollection();
  },
  index: function(){
    var blogListing = new views.BlogListView({collection: this.blogPost});
    console.log(blogListing);
    $('.app').html(blogListing.render().el);
    this.blogPost.fetch();
  },

  showBlog: function(id){
     var blog = this.blogPost.findWhere({'_id': id});
     var blogDetail = new view.BlogDetailView({model: blog});
     $('.app').html(blogDetail.render().el);
   }
});

// Link this to the views BlogDetailView

// });

var appRouter = new AppRouter();
module.exports = appRouter;
