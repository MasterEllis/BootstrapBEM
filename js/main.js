$(document).ready(function() {
  $("button[filter]").click(function() {
    if ($(this).attr("filter") != "all") {
      $(".filter>div[filter != '" + $(this).attr("filter") + "']").fadeOut(350);
      $(".filter>div[filter = '" + $(this).attr("filter") + "']").fadeIn(350);
    } else {
      $(".filter>div").fadeIn(350);
    }
  });
});
