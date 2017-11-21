$(document).foundation();

$(document).ready(function() {

  $('.home-hero').slick({
    slidesToShow: 1,
    adaptiveHeight: true,
    fade: true,
    centerMode: true,
    asNavFor: '.home-nav'
  });

  $('.home-nav').slick({
    asNavFor: '.home-hero',
    infinite: true,
    arrows: false,
    slidesToScroll: 1,
    variableWidth: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          centerMode: true,
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });

  $('video').each(function () {
      this.play();
  });

  $("body").fitVids();

});
