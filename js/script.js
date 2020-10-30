$(document).ready(function () {
  var proposal =
    '<div class="card background-shadow">' +
    '<h2>Project Proposal</h2><br /><h4>Project Proposal Submission Date - Februrary 25th, 2020.</h4><h5 style="margin-top: 10px;">Allocated Marks : 12%</h5>' +
    "<hr />" +
    '<p class="desc">A project proposal is the document that facilitates a professional relationship between an organization and outside contributors. Typically, a project proposal is the initial framework for establishing the concept of the project and includes what you want to accomplish, an explanation of objectives, and plans for achieving them.</p>' +
    "</div>";
  var pp1 =
    '<div class="card background-shadow">' +
    '<h2>Progress Presentation I</h2><br /><h4>Progress Presentaion - July 13th, 2020.</h4><h5 style="margin-top: 10px;">Allocated Marks : 15%</h5>' +
    "<hr />" +
    '<p class="desc">At least, 50% of the project should be completed in this review and need to describe the current status and future plans. Apart from that, a demo needs to be done if it is possible with the current progress of the reasearch. All the methodologies that have been used up to this point should be described.</p>' +
    "</div>";

  var pp2 =
    '<div class="card background-shadow">' +
    "<h2>Progress Presentation II</h2><br /><h4>Progress Presentation 2 - September 24th, 2020.</h4>" +
    "<hr />" +
    '<p class="desc">Prior to progress presentation 2, 90% of the research needs to be completed. Each team would be given 35 minutes to explain the current progress. Within the 35 minutes, each member can take 5 minutes to explain their individual progresses. If it is not possible to do a demo during the presentation, team can do a demo prior to the presentation, prepare a video and present it during the presentation. The poster needs to be displayed during the presentation.</p>' +
    "</div>";

  var demo =
    '<div class="card background-shadow">' +
    "<h2>Demo</h2><br /><h4>Demo - September 24th, 2020.</h4>" +
    "<hr />" +
    '<p class="desc"></p>' +
    '<img class="banner" src="images/Banner.png"></img>' +
    "</div>";

  var finalAssessment =
    '<div class="card background-shadow">' +
    "<h2>Final Assessment</h2><br /><h4>Final Assesment - November 16th, 2020.</h4>" +
    "<hr />" +
    '<p class="desc"></p>' +
    "</div>";

  var viva =
    '<div class="card background-shadow">' +
    "<h2>Final Viva/Presentation</h2><br /><h4>Final Viva/Presentation - November 16th, 2020.</h4>" +
    "<hr />" +
    '<p class="desc">Completed project would be presented and a viva session will be done. Each member of the team would have to explain their components and methodologies that have been used.</p>' +
    "</div>";

  $(".dropdown-menu li").click(function () {
    var milestone = $(this).data("milestone");
    var div = document.getElementById("content");

    if (milestone === "m1") {
      div.innerHTML = proposal;
    } else if (milestone === "m2") {
      div.innerHTML = pp1;
    } else if (milestone === "m3") {
      div.innerHTML = pp2;
    } else if (milestone === "m4") {
      div.innerHTML = demo;
    } else if (milestone === "m5") {
      div.innerHTML = finalAssessment;
    } else if (milestone === "m6") {
      div.innerHTML = viva;
    }
  });
});
