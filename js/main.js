
var Employee = Backbone.Model.extend(); // make an Employee Model

var EmployeeCollection = Backbone.Collection.extend({ // make a collection that uses the employee model
    url: "data.json",
    model: Employee
});

//add view here//

var EmployeeView = Backbone.View.extend({
  template: JST["employeeRow"],
  tagName: "tr",

  render: function() {
    var markup = this.template( this.model.toJSON() );
    this.$el.html(markup);

    return this;
  }

});

$(function(){

  var employees = new EmployeeCollection(); //create collection

  employees.on("add", function(model) {
    var employeeView = new EmployeeView({model: model});
    $(".table-body").append(employeeView.render().el);

  });

  employees.fetch().done(function(){

    var firstModel = employees.first();
      var headings = firstModel.keys();
      
      _.each(headings, function(heading) {
         $("thead tr").append($("<th />").text(heading)); // appends heading in th
      });
  });


});


