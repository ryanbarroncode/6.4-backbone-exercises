var Backbone = require('backbone');
var $ = require('jquery');

var personTemplate = require('../../templates/personform.hbs');

var PersonForm = Backbone.View.extend({
  tagName: 'form',
  id: 'person-form',
  className: 'well',

  events: {
    'click .person-save': 'addPerson'
  },

  addPerson: function(event){
    event.preventDefault();

    var personPost = {
      firstName: $('#form-firstname').val(),
      lastName:$('#form-lastname').val(),
      address: $('#form-address').val(),
      phoneNumber: $('#form-phone-number').val()
    };
    this.collection.create(personPost);
  },
render: function(){
  console.log('log', this.collection);
  this.$el.html(personTemplate());
  return this;
},
});

module.exports={
  PersonForm: PersonForm
};
