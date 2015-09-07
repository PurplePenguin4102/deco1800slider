function message() {
    var x = "hello wolrd";
    $("p").html(x);
}

$("#test").click(function() {
    message();
})(jQuery);