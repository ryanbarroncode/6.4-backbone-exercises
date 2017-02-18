var Backbone = require('backbone');

var blogListTemplate = require('../../templates/blog_list.hbs');
var blogViewsTemplate = require('../../templates/blog_views.hbs');

// Created the ul where the list of blogs go
var BlogListView = Backbone.View.extend({
  tagName: 'ul',
  className: 'list-group',
  initialize: function(){
    this.listenTo(this.colection, 'add', this.addBlog)
  },
  render: function(){
    return this;
  },
  addBlog: function(blog){
    var blogItem = new BlogItemView({model: blog});
    this.$el.append(blogItem.render().el);
  }
});

// the blog items are being rendered into li's
var BlogItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item',
  template: 'blogViewsTemplate',
  render: function(){
    var renderedTemplate = this.template(this.model.toJSON());
    this.$el.html(renderedTemplate);
    return this;
  }
});

var BlogDetailView = Backbone.View.extend({
  className: 'well',
 template: 'blogViewsTemplate',
 render: function(){
   var renderedTemplate = this.template(this.model.toJSON());
   this.$el.html(renderedTemplate);
   return this;
 }
});



module.exports = {
  BlogListView: BlogListView,
  BlogItemView: BlogItemView
};
