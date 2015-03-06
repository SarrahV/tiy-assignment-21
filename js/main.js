
var Employee = Backbone.Model.extend(); // make an Employee Model

//--------------------------------------------------Employee Collection----------------//

var EmployeeCollection = Backbone.Collection.extend({ // make a collection that uses the employee model
    url: "data.json",
    model: Employee
});

//--------------------------------------------------Filtered Employee Collection----------------//

var FilteredEmployeeCollection = EmployeeCollection.extend({

});


//--------------------------------------------------Employee View----------------//

var EmployeeView = Backbone.View.extend({
  template: JST["employeeRow"],
  tagName: "tr",

  render: function() {
    var markup = this.template( this.model.toJSON() );
    this.$el.html(markup);

    return this;
  }

});

var CheckboxView = Backbone.View.extend({
  template: JST["dept"],
  tagname: "li",

  render: function() {
    var markup = this.template( this.model.toJSON() );
    this.$el.html(markup);

    return this;
  }

});


//--------------------------------------------------Glue Code----------------//

// 4. `function you create`
 // 5. goes through your list of departments and sees whats checked
 // 6. filters the EmployeeCollection
 // 7. sets those results on the FilteredEmployeesCollection
 // WIN.

function formatTimes() {
  _.each($("time[datetime]"), function(e) {
  var $el = $(e); 
  $el.text(moment($el.attr('datetime'))
  .format("MMMM Do, YYYY")) });
}

$(function(){ 

  var employees = new EmployeeCollection(); //create collection
  var filtered = new FilteredEmployeeCollection();//filtered employees


  employees.on("add", function(model) {
    var employeeView = new EmployeeView({model: model});


    $(".table-body").append(employeeView.render().el);
  });

 employees.fetch().done(function(){

    var firstModel = employees.first();
      var headings = firstModel.keys();
      //console.log(headings);
      _.each(headings, function(heading) {
         $("thead tr").append($("<th />").text(heading)); // appends heading in the employee view
      });

      formatTimes();


      _.uniq(employees.map(function(e) { 
        console.log(e.attributes.Dept);
        return e.attributes.Dept; 
        _.each()
      }));
  

    // 1. map employee departments, uniq X
   // 2. for each department, create the filter checkbox (probably its own template)
  // 3. it'll handle an on change event that calls a `function you create`

   // for each employee, 
  // format the date
     // set the FormattedStart attribute to the formatted date.

     /*var CheckboxView = Backbone.View.extend({
        template: JST["dept"],
        tagname: "li",
        var department = new EmployeeCollection();

      getRoles: function() {
        return _.uniq(this.department.pluck("dept"), false, function(dept){
        return dept;
        console.log(dept); 
    });
  }
});*/

  });  //end fetch

});



