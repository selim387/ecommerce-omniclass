var minOffset = 100;
var maxOffset = 500;

$('.handle').mousedown(function(ev, handler) {
  $(document).mousemove(function(ev, handler) {
    var offset = ev.pageX;
    
    offset = offset < minOffset ? minOffset : offset;
    offset = offset > maxOffset ? maxOffset : offset;
    
    $('.shop-layout__sidebar').css('width', offset);
    $('.shop-layout__content').css('marginLeft', offset + 10);
  });
});

$(document).mouseup(function(e) {
  $(document).unbind('mousemove');
});