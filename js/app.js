$(document).foundation();

$(function(){

  $('.home-hero').slick({
    slidesToShow: 1,
    fade: true,
    centerMode: true,
    //adaptiveHeight: true,
    asNavFor: '.home-nav'
  });

  $('.home-nav').slick({
    asNavFor: '.home-hero',
    infinite: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true
  });

  $('video').each(function () {
      this.play();
  });

  $('body').fitVids();

});
