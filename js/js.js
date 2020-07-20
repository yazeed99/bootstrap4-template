$(function () {
    var win = $(window).height();
    var upper = $('.upper-bar').innerHeight();
    var nav  = $('.navbar').innerHeight();
    console.log(`${win} + .... ${upper} +  ..... ${nav}`)

    $('.slider , .carousel-item').height(win - ( upper + nav ));
});