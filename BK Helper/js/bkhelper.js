var script = document.createElement('script');
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
script.type = "text/javascript";
document.getElementsByTagName('head')[0].appendChild(script);

/*


OR

$(function() {
    $("#reg").click(function () {
        $(".mapobjects").toggle(1000);
    });
});

if ($("#checkboxId").prop('checked', true)

$("#checkboxId").prop('checked', false)

OR

$('checkbox').on('item',function(e) {
    if ($(this).prop('checked')) {
        $('.mapobjects').css("opacity", "1");
    } else {
        $('.mapobjects').css("opacity", "0");
    };
});

OR

$(document).ready(function(){
    $(":checkbox").click(function(){
      $("h1, h2, p").toggleClass("blue");
    });
  });

OR

$(function() {
    ($("checkbox").prop('checked')) {
        $(".mapobjects").css("opacity", "1");
    };
});

OR

$(function() {
    ($("checkbox").prop('checked')) {
        $(".mapobjects").css("opacity", "0");
    };
});

*/

$('checkbox').on('item',function(e) {
    if ($(this).prop('checked')) {
        $('.mapobjects').toggleClass('.mapobjectstoggle');
    } else {
        $('.mapobjects').toggleClass('.mapobjectstoggle');
    };
});