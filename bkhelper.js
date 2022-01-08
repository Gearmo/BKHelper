var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

/*
$(function() {
    $("checkbox").prop('checked', false) {
        $(".mapobjects").css({"opacity": "0"});
    });
});

OR

$(function() {
    $("#reg").click(function () {
        $(".mapobjects").toggle(1000);
    });
});

if ($("#checkboxId").prop('checked', true)

$("#checkboxId").prop('checked', false)

OR

if ($("checkbox").prop('checked')) {
    $(".mapobjects").css("opacity", "1");
} else {
    $(".mapobjects").css("opacity", "0");
}

*/

$('checkbox').on('item',function(e) {
    if ($(this).prop('checked')) {
        $('.mapobjects').css("opacity", "1");
    } else {
        $('.mapobjects').css("opacity", "0");
    };
});
