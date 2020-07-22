$(function () {
    // slider height
    var win = $(window).height();
    var upper = $('.upper-bar').innerHeight();
    var nav  = $('.navbar').innerHeight();
    console.log(`${win} + .... ${upper} +  ..... ${nav}`)
    // slider height

    $('.slider , .carousel-item').height(win - ( upper + nav ));
    //shuffle img
    $(".Featured-ul li").on("click",function () {
        $(this).addClass("li-active").siblings().removeClass("li-active");
        if ($(this).data("class") == "all") {
            $(".im").css("display", "block");
        }
        else {
            $(".im").css("display", "none");
            $($(this).data("class")).css("display", "block");


        }
    });


    ////shuffle img


});