$("nav img").on("click", function() {
    $(".ul-hidden").fadeToggle(".ul-active");
});
/*catalog*/

$(".p-item").hover(
	function() {
		$(this).children().css("display","block");
	},
	function() {
		$(this).children().css("display","none");
});

/*video*/

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
$(".video-wrapper button").on("click",
    function() {
    $("#video").css("opacity","1");

    if(play.hasClass("active")){
        play.removeClass("active")
    } else {
            play.addClass("active")
        }
    if (pause.hasClass("active")) {
        pause.removeClass("active")
    } else {
            pause.addClass("active")
        }
	});
$(".play").click(function() {
    $(".video-wrapper h2").css("display","none");
});

$(".products").animated("slideInLeft", "SlideInRigth");
$(".about").animated("slideInRight", "SlideInLeft");
$(".news").animated("slideInLeft", "SlideInRigth");



