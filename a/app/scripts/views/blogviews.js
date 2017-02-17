var Backbone = require('backbone');
var $ = require('jquery');

var blogPostTemplate = require('../../template/blogForm.hbs');

var BlogForm = Backbone.View.extend({
  tagName: 'form',
  id: 'blog-form',
  className: 'well',

  events: {
    'submit': 'addBlog'
  },


  addBlog: function(event){
    event.preventDefault();

    var blogPost = {
      title: $('#form-blog-title').val(),
      body: $('#form-blog-body').val()
    };

    this.collection.create(blogPost);
  },

  render: function(){
   this.$el.html(blogPostTemplate());
     //always return this after using render:
   return this;
 },
});

//  renderBlog: function(blogPost) {
//     var blog = new ContactItemView({model: BlogPost});
//     this.$el.append(contact.render().$el)
//
// });

module.exports = {
  BlogForm: BlogForm
};
