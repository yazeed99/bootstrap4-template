$(function () {
    // slider height
    var win = $(window).height();
    var upper = $('.upper-bar').innerHeight();
    var nav  = $('.navbar').innerHeight();
    console.log(`${win} + .... ${upper} +  ..... ${nav}`)
    // slider height


    // window scroll event

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 280){
            $(".i1").removeClass("animate__fadeOut").addClass("animate__fadeInUp");
            $(".i2").removeClass("animate__fadeOut").css("animation-delay","500ms").addClass("animate__fadeInUp");
            $(".i3").removeClass("animate__fadeOut").css("animation-delay","1000ms").addClass("animate__fadeInUp");
            $(".i4").removeClass("animate__fadeOut").css("animation-delay","1500ms").addClass("animate__fadeInUp");

            // $(".Features-item").removeClass("animate__fadeOut").addClass("animate__fadeInUp");
        }

    });


    // window scroll event


    $('.slider , .carousel-item').height(win - ( upper + nav ));
    //shuffle img
    $(".Featured-ul li").on("click",function () {
        $(this).addClass("li-active").siblings().removeClass("li-active");
        if ($(this).data("class") == "all") {
            $(".im").removeClass("animate__bounceOut").addClass("animate__bounceIn");
            $(".im").css("display","block");
        }
        else {
            $(".im").removeClass("animate__bounceIn").addClass("animate__bounceOut");
            $(".im").css("display","none");
            $($(this).data("class")).removeClass("animate__bounceOut").addClass("animate__bounceIn");
            $($(this).data("class")).css("display","block");

        }
    });
    ////shuffle img


});