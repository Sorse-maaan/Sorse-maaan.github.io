$('#clock').countdown('2018/03/10', function(event) {
    var $this = $(this).html(event.strftime(''
        + '<div class="date"><span class="time">%D</span><span class="dots"> : </span><br><span class="time-name">days</span></div> '
        + '<div class="date"><span class="time">%H</span><span class="dots"> : </span><br><span class="time-name">hours</span></div> '
        + '<div class="date"><span class="time">%M</span><span class="dots"> : </span><br><span class="time-name">minutes</span></div>'
        + '<div class="date"><span class="time">%S</span><br><span class="time-name last">seconds</span></div>'));
    });
$(".worker-item").hover(
 	function() {
 		$(".hidden-content",this).fadeIn("slow", function() {
    $(this).addClass("hover");
});
 	},
 	function() {
 		$(".hidden-content").fadeOut("slow", function() {
    $(this).removeClass("hover");
});
});

$("#view-map").on("click",function() {
	$(".form-bg").hide("slow");
});



