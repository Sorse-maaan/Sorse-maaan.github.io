$(document).ready(function()
{

$(".checkbox").click(function(){
	$(".gif").toggleClass("active");
});


var obj = document.createElement("audio");
  obj.src = "happy_birthday.mp3";
  obj.volume = 0.1;
  obj.autoPlay = false;
  obj.preLoad = true;
  obj.controls = true;

  $(".checkbox").click(function() {
  	if($(".gif").hasClass("active")) {
  		obj.play();
  	} else {
  		obj.pause();
  		obj.currentTime = 0;
  	} 
  });

$(".checkbox").click(function() {
	$("h1").fadeIn("slow");
});
});