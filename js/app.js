$(document).foundation();

$(function(){

  $('.home-hero').slick({
    slidesToShow: 1,
    fade: true,
    centerMode: true,
    asNavFor: '.home-nav',
    adaptiveHeight: true
  });

  $('.home-nav').slick({
    asNavFor: '.home-hero',
    infinite: true,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '60px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('video').each(function () {
      this.play();
  });

  $('body').fitVids();

});
