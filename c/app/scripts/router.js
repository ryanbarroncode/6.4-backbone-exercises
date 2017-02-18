var Backbone = require('backbone');
var $ = ('jquery');

var views = require('./models/blog_models.js');
var models = require('./views/blog_view.js');

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'blog/:id/': 'showBlog'
  },
  initialize: function(){
  this.blogList = new models.BlogCollection();
  },
  index: function(){
    var blogListing = new views.BlogListView({collection: this.blogList});
    $('.app').html(blogListing.render().$el);
    this.blogList.fetch();
  },

  showBlog: function(id){
     var blog = this.blogList.findWhere({'_id': id});
     var blogDetail = new view.blogDetailView({model: blog});
     $('.app').html(blogDetail.render().el);
   }
});

// Link this to the views BlogDetailView

// });

var appRouter = new AppRouter();
module.exports = appRouter;
