//This script to ensure that script load after the document ready
$(document).ready(main);

function main() {
  //Showor hide Back to Top Button
  $('.backtotop').hide();
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.backtotop').fadeIn(200);
    } else {
      $('.backtotop').fadeOut(200);
    }
  });
  //Scrolling Animate
  $('.backtotop').click(function(event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 300);
  });
}

//End of Javascript
