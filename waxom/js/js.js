$(document).ready(function(){

	$(".main-slider").owlCarousel({
		items: 1,
		nav: true,
		navText: ["<i class='icon-left-arrow'>","<i class='icon-right-arrow'>"],
  		dots: true
  	});

  	$(".post-blocks").owlCarousel({
  		nav: true,
		navText: ["<i class='icon-left-arrow'>","<i class='icon-right-arrow'>"],
  		dots: false,
        responsiveClass: true,
        responsive: {
        0: {
          items: 1
        },
        960: {
          items: 3
        }
      }
  	});

  	$(".slider-in-slider").owlCarousel({
  		items: 1
  	});

    $(".sponsors-slider").owlCarousel({
        items: 4,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                dots: true
            },
            550: {
                items: 2,
                margin: 0
            },
            800: {
                items: 3,
                margin: 100
            },
            1600: {
                items: 4
            }
        }
    });
	/* project items */
	$(".hidden-li").on("click", 
		function() {
			$(this).children(".hidden-in-li").fadeToggle();
			$(this).toggleClass("hover-color");
		});

	/* numbers counter */

    var show = true;
    var countbox = "#counts";
    $(window).on("scroll load resize", function(){
 
        if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
 
        var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
 
        var w_height = $(window).height();        // Высота окна браузера
        var d_height = $(document).height();      // Высота всего документа
 
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
 
        if(w_top + 800 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
            $(".spincrement").spincrement({
                thousandSeparator: "",
                duration: 1200
            });
 
            show = false;
        }
    });
});