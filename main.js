$(document).ready(main);
function main() {

  /*$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop').fadeIn(200);
    } else {
      $('.backtotop').fadeOut(200);
    }
  });

  $('.backtotop').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 300);
  });*/
}

$(window).on('scroll', function() {
  if ($(this).scrollTop() > 3) {
    $('.backtotop').fadeIn(200);
  } else {
    $('.backtotop').fadeOut(200);
  }
});
$('.backtotop').on('click', function(){
  $('html, body').animate({scrollTop: 0}, 300);
});
