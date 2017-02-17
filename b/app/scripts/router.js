var Backbone = require('backbone');
var $ = require('jquery');

var views = require('./views/person_views.js');
var models = require('./models/person_model.js');

var AppRouter = Backbone.Router.extend({

  routes: {
    '': 'index'
  },
  initialize: function(){
    this.personCollection = new models.PersonCollection;
  },
  index: function(){
    var personFormView = new views.PersonForm({collection: this.personCollection});
    $('.person-form').append(personFormView.render().$el);
  }

  // render: function(){
  //   // this.$el.html(personTemplate());
  //   // return this;
  // },

});
var appRouter = new AppRouter;

module.exports = appRouter;
