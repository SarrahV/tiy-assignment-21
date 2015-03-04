
var Employee = Backbone.Model.extend({

  url: "data.json"

})

var EmployeeView = (function() {
  var template = JST["employeeRow"];

  function EmployeeView(model) {
    _.extend(this, Backbone.Events);
    this.model = model;
    this.$el = $("<tr />");
  }

  EmployeeView.prototype = {
    render: function() {
      var markup = template( this.model.toJSON() );
      return this.$el.html( markup );
    }
  }

  return EmployeeView;

})();

/*var HeadingView = (function() {
  var template = JST["employeeHead"];

  function HeadingView(model) {
    _.extend(this, Backbone.Events);
    this.model = model;
    this.$el = $(".table-heading-row");
  }

  HeadingView.prototype = {
    render: function() {
      var markup = template( this.model.toJSON() );
      return this.$el.html( markup );
    }
  }

});*/

$(function(){

  $.ajax("data.json").done(function(data) {

      var models = [];

      _.each(data, function(datum) {
        console.log(datum);

      var employeeModel = new Employee(datum);
        
      models.push(employeeModel);
        console.log(models);

      var employeeView = new EmployeeView(employeeModel);

      $(".table-body").append(employeeView.render());
    });

    //
    var firstModel = models[0];
    var headings = firstModel.keys();
      console.log(headings);

    var keys = headings.map(function(heading){
        return {heading: "key"};
    });
    _.each(headings, function(heading) {
       $("thead tr").append($("<th />").text(heading));
    });

  

  });

});

