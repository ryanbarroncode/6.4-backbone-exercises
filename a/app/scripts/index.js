var Backbone = require('backbone');
var $ = require('jquery');

require('./router');

// var Blogs = require('./views/contactviews.js').Blogs;
$(function(){
  Backbone.history.start();
});
