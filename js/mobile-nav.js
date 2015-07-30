$(document).ready(myFunction);

function myFunction() {
  $('.nav-toggle').on('click', function (e) {
    e.preventDefault();
    $('.mobile-nav').toggleClass('open');
    $('body').toggleClass('no-scroll');
  });
}