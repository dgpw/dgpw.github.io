// $(document).ready(function(){
//   var $imgs = $(".svg_element>img"), imgLength = $imgs.length, offsetArray = [];
//   for (var k = 0; k < imgLength; k++) {
//     offsetArray.push({
//       offsetX: Math.random() > 0.5 ? -1 : 1,
//       offsetY: Math.random() > 0.5 ? -1 : 1
//     });
//   }

//   $(document).mousemove(function(event){
//     var clientX, clientY, rand, offsetY, offsetX;
//     clientX = event.clientX / 50;
//     clientY = event.clientY / 50;

//     for (var i = 0; i < imgLength; i++) {
//       rand = Math.random(), offsetY = clientY + rand, offsetX = clientX + rand;
//       // console.log("transform", "translateY(" + offsetY + "px) translateX(" + offsetX + "px)");
//       offsetX = offsetX * offsetArray[i].offsetX;
//       offsetY = offsetY * offsetArray[i].offsetY;
//       $imgs.eq(i).css("transform", "translateY(" + offsetY + "px) translateX(" + offsetX + "px)");
//     }
//   });
// });

$(window).mousemove(function(e) {
  var change;
  var xpos=e.clientX;var ypos=e.clientY;var left= change*20;
  var  xpos=xpos*0.2;ypos=ypos*0.3;
  $('.svg_element').css('top',((0+(ypos/50))+"px"));
  $('.svg_element').css('right',(( 0+(xpos/80))+"px"));

});
