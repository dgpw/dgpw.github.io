window.onload = function(){
  setTimeout(() => {
    function offset(el) {
      var rect = el.getBoundingClientRect(),
          scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
          top: rect.top + scrollTop,
          left: rect.left + scrollLeft
      }
    }
    var chappie_anim = function() {
      var elements = document.querySelectorAll('.chappie_anim');
      for (var i = 0; i < elements.length; i++) {
          var elementData = elements[i].dataset.chappie;
          if (window.scrollY > offset(elements[i]).top - window.innerHeight ) {
              elements[i].classList.add('active_chappie')
              if (elementData != undefined) {
                  elements[i].classList.add(elementData)
              }
          }else {
              elements[i].classList.remove('active_chappie')
          }
      }
    }
    chappie_anim();
  
    window.addEventListener('scroll', chappie_anim);
    window.addEventListener('resize', function(){
      setTimeout(function(){
        chappie_anim();
      },500)
    });
    
    if ($(window).scrollTop() > 0 ) {
      $('body').addClass('scrolled')
    }else {
      $('body').removeClass('scrolled')
    }
    document.querySelector('#loader-fragment').style.opacity = '0';
    document.querySelector('body').classList.add('loaded');
   }, 1000);






// cursor
var cursor = $(".cursor"),
		follower = $(".cursor-follower");

var posX = 0,
		posY = 0;

var mouseX = 0,
		mouseY = 0;

TweenMax.to({}, 0.016, {
	repeat:-1,
	onRepeat:function(){
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;
		
		TweenMax.set(follower, {
			css: {
				left: posX - 12,
				top: posY - 12
			}
		});
		TweenMax.set(cursor, {
			css: {
				left: mouseX,
				top: mouseY
			}
		});
	}	
});

$(document).on("mousemove",function(e){
	mouseX = e.pageX;
	mouseY = e.pageY;
});

$(".link").on("mouseenter",function(){
	cursor.addClass("active");
	follower.addClass("active");
});

$(".link").on("mouseleave",function(){
	cursor.removeClass("active");
	follower.removeClass("active");
});

}

  $('.burger').click(function () {
  $('body').toggleClass('opened');
});
$('.close').click(function () {
  $('body').removeClass('opened');
});


