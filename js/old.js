var Contact = Backbone.Model.extend({
  
  // url: "js/contacts.json"

});

var ContactView = (function(){

  var template = JST["contact"];

  function ContactView(model) {
    _.extend(this, Backbone.Events)
    this.model = model;
    this.$el = $("<div />");
    this.listenTo(this.model, "change", function(){
      this.render();//when model changes it will re-render
    });
  }

  ContactView.prototype = {
    render: function() {
      var markup = template( this.model.toJSON() )
      return this.$el.html( markup ) ;
    }
  }

  return ContactView;

})();

$(function() {

  $.ajax("js/contacts.json").done(function(data) {

    _.each(data, function(datum){

      var contactModel = new Contact(datum);

      var contactView = new ContactView(contactModel);

      $("body").append(contactView.render());
      
    });

  });
  
});