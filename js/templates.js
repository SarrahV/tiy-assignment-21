this["JST"] = this["JST"] || {};
this["JST"]["dept"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<input type=\"checkbox\" class=\"dept\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" / > "
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\n\n\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["employeeHead"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<th colspan=\"1\" data-name='key'>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</th>";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["employeeRow"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "\n  <td><img src=\""
    + escapeExpression(((helper = (helper = helpers.Team || (depth0 != null ? depth0.Team : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Team","hash":{},"data":data}) : helper)))
    + "\" alt=\"Our Team\"></td>\n  <td><h2>"
    + escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Name","hash":{},"data":data}) : helper)))
    + "</h2></td>\n  <td><p>"
    + escapeExpression(((helper = (helper = helpers.Role || (depth0 != null ? depth0.Role : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Role","hash":{},"data":data}) : helper)))
    + "</p></td>\n  <td><p>"
    + escapeExpression(((helper = (helper = helpers.Manager || (depth0 != null ? depth0.Manager : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Manager","hash":{},"data":data}) : helper)))
    + "</p></td>\n  <td><p>"
    + escapeExpression(((helper = (helper = helpers.Phone || (depth0 != null ? depth0.Phone : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Phone","hash":{},"data":data}) : helper)))
    + "<p></td>\n  <td><p>"
    + escapeExpression(((helper = (helper = helpers.Dept || (depth0 != null ? depth0.Dept : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Dept","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((helper = (helper = helpers.Icon || (depth0 != null ? depth0.Icon : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Icon","hash":{},"data":data}) : helper)))
    + "</p></td>\n  <td class=\"start\"><p><time datetime=\""
    + escapeExpression(((helper = (helper = helpers.Start || (depth0 != null ? depth0.Start : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Start","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.Start || (depth0 != null ? depth0.Start : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Start","hash":{},"data":data}) : helper)))
    + "</time></p></td>\n";
},"useData":true});