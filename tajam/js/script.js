$(document).ready(function() {
//headerNav
$(".more a").on("click", function() {
    $(".more ul").toggleClass("ulActive");
});
$(".more ul li").css("display", "block");

//owlCarousel
$('.owl-carousel').owlCarousel({
    items:1,
    margin:10,
});
$(".owl-carousel").css("touch-action","none");

//video
var video = document.getElementById("video");
video.controls = false;

function Play() {
   var playpause = document.getElementsByClassName("play");
      video.play();
}
function Pause() {
   var playpause = document.getElementsByClassName("pause");
      video.pause();
}
var play = $(".play"),
    pause = $(".pause");
$("button").on("click",
    function() {
    $("#video").css("opacity","1");
    
    if(play.hasClass("sliderActive")){
        play.removeClass("sliderActive")
    } else {
            play.addClass("sliderActive")
        }
    if (pause.hasClass("sliderActive")) {
        pause.removeClass("sliderActive")
    } else {
            pause.addClass("sliderActive")
        }
});

$(".play").click(function() {
    $(".videoWrapper h3").css("display","none");
});

//validation

$(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );

});




