$(".nav").fadeTo(0, .3);

$(".nav").on("mouseenter", function () {
    $(".nav").fadeTo(100, 1);
});

$(".nav").on("mouseleave", function () {
    $(".nav").fadeTo(100, .3);
});