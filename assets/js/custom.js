$(document).ready(function () {
  if ($("main#home").length) {
    // Slider 1
    $("#slickSlider .slick-slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      autoplay: true,
      autoplaySpeed: 3000,
    });

    // Slider 2
    $("#camp .slick-slider").slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 885,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    // HamBurger
    $("#hamBurger").click(function () {
      $(this).toggleClass("active");
      $("body").toggleClass("active");
      $("header nav").toggleClass("active");
    });
  
    // Closing HamBurger
    $("header a").click(function () {
      $("#hamBurger").removeClass("active");
      $("body").removeClass("active");
      $("header nav").removeClass("active");
    });

    // Click Function
    $("#jsBtn").click(function (e) {
      e.preventDefault();
      $("#visit .block.two").slideToggle(900);
    });
  }

  // Scroll To Top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      // Adjust the scroll position where the button appears
      $("#scrollToTop i").fadeIn();
    } else {
      $("#scrollToTop i").fadeOut();
    }
  });
  // Smooth scroll to top when the button is clicked
  $("#scrollToTop i").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800); // Adjust the scrolling speed if needed
    return false;
  });
});
