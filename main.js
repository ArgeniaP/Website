alert('Javascript is here!');
$(document).ready(function() {
  // Show or hide the button
  $('.backtotop').hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 2000) {
      $('.backtotop').fadeIn(200);
    } else {
      $('.backtotop').fadeOut(200);
    }
  });
  // Animate scrolling
  $('.backtotop').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 300);
  });
});
