
var Employee = Backbone.Model.extend(); // make an Employee Model

//--------------------------------------------------Employee Collection----------------//

var EmployeeCollection = Backbone.Collection.extend({ // make a collection that uses the employee model
    url: "data.json",
    model: Employee
});

//--------------------------------------------------Filtered Employee Collection----------------//

var FilteredEmployeeCollection = EmployeeCollection.extend({ //empty bucket to hold filtered selection

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



//--------------------------------------------------Glue Code----------------//

function formatTimes() {
  _.each($("time[datetime]"), function(e) {
  var $el = $(e); 
  $el.text(moment($el.attr('datetime'))
  .format("MMM Do, YYYY")) });
};

$(function(){ 

  var employees = new EmployeeCollection(); //create collection
  var filtered = new FilteredEmployeeCollection();//filtered employees


  filtered.on("add", function(model) {
    var employeeView = new EmployeeView({model: model});
    employeeView.listenTo(model, 'remove', employeeView.remove);
    $(".table-body").append(employeeView.render().el);
  })

 employees.fetch().done(function(){

    var firstModel = employees.first();
    var headings = firstModel.keys();
    _.each(headings, function(heading) {
       $("thead tr").append($("<th />").text(heading)); // appends heading in the employee view
    });

    var checkboxes = _.uniq(employees.map(function(e) {  //maps dept attributes

      return e.attributes.Dept; 

    }));

    _.each(checkboxes, function(dept) {             //set checkbox to list
      var markup = JST["dept"]({ name: dept });
      $(".menu").append($("<li />").html(markup));
    });
  
    checkAllFilters();
  });//end fetch

  $(document).on('change', 'input.dept',function () {
    checkAllFilters();
  })

  function checkAllFilters() {
    var checked = _.map($('input.dept:checked'), function(e) { 
      return $(e).attr('name'); 
    })
    console.log(checked);

    if (checked.length === 0) {
      filtered.set(employees.models);
    } else {
      var myChoice = employees.filter(function(employee) {  
        return _.contains(checked, employee.get('Dept')); 
      });
      filtered.set(myChoice);
    };

    formatTimes();
  };
});







