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
    centerPadding: '60px'
  });

  $('video').each(function () {
      this.play();
  });

  $('body').fitVids();

});
