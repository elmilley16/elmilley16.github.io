
// slick slider
$(document).ready(function () {
    $('.library-carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slider-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slider-next"><i class="fa fa-chevron-right"></i></button>',
    });

  var currentYear = (new Date).getFullYear();
  $("#jsCurrentYear").prepend("&copy; " + currentYear + " ");
});