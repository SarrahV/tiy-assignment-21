
var Employee = Backbone.Model.extend(); // make an Employee Model

var EmployeeCollection = Backbone.Collection.extend({ // make a collection that uses the employee model
    url: "data.json",
    model: Employee
});

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

  return EmployeeView; // this makes one employee row

})();

$(function(){

  var employees = new EmployeeCollection(); //create collection

  employees.on("add", function(model) {
    var employeeView = new EmployeeView(model);
    $(".table-body").append(employeeView.render());

  });

  employees.fetch().done(function(){

    var firstModel = employees.first();
      var headings = firstModel.keys();
      
      _.each(headings, function(heading) {
         $("thead tr").append($("<th />").text(heading)); // appends heading in th
      });
  });


});


