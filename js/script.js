$(document).ready(function () {
  var proposal =
    "<div>" + "<h4>Project Proposal - Februrary 25th, 2020.</h4>" + "</div>";
  var pp1 =
    "<div>" +
    "<h4>Progress Presentaion - July 13th, 2020.</h4>" +
    '<table class="table table-hover">' +
    '<thead class="thead-dark">' +
    "<tr>" +
    ' <th scope="col">#</th>' +
    '<th scope="col">IT No.</th>' +
    '<th scope="col">Name</th>' +
    '<th scope="col">Component</th>' +
    '<th scope="col">Marks out of 28</th>' +
    "</tr>" +
    "</thead>" +
    "<tbody>" +
    "<tr>" +
    '<th scope="row">1</th>' +
    "<td>IT17360142</td>" +
    "<td>Senarathne G.D.P.B.</td>" +
    "<td>Processing voice inputs to gain productive output</td>" +
    "<td>18.98</td>" +
    "</tr>" +
    "<tr>" +
    '<th scope="row" class="table-light">' +
    "2" +
    "</th>" +
    '<td class="table-light">IT17004596</td>' +
    '<td class="table-light">Methmini M.A.</td>' +
    '<td class="table-light">' +
    "Training Machine Learning model to evaluate answers of written" +
    "test" +
    "</td>" +
    '<td class="table-light">18.14</td>' +
    "</tr>" +
    "<tr>" +
    '<th scope="row">3</th>' +
    "<td>IT17101134</td>" +
    "<td>Silva W.M.R.D.</td>" +
    "<td>Categorizing candidates using processed data</td>" +
    "<td>18.44</td>" +
    "</tr>" +
    "<tr>" +
    '<th scope="row" class="table-light">' +
    "4" +
    "</th>" +
    '<td class="table-light">IT17018210</td>' +
    '<td class="table-light">Kavinda P.D.D.</td>' +
    '<td class="table-light">' +
    "Training Machine Learning model to predict future HRM related" +
    "problems" +
    "</td>" +
    '<td class="table-light">18.22</td>' +
    "</tr>" +
    "</tbody>" +
    "</table>" +
    "</div>";

  var pp2 =
    "<div><h4>Progress Presentation 2 - September 24th, 2020.</h4></div>";

  $(".dropdown-menu li").click(function () {
    var milestone = $(this).data("milestone");
    var div = document.getElementById("content");

    if (milestone === "m1") {
      div.innerHTML = proposal;
    } else if (milestone === "m2") {
      div.innerHTML = pp1;
    } else if (milestone === "m3") {
      div.innerHTML = pp2;
    }
  });
});
