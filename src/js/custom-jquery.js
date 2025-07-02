jQuery(document).ready(function($) {
  const safety_content = document.querySelector(".safety-content")
  if (safety_content) {
    safetySlider()
  }
  function safetySlider() {
    const slider = $('.safety-content')
    const btn_prev = $('.navigation-btn__arrow--prev')
    const btn_next = $('.navigation-btn__arrow--next')

    slider.slick({
      arrows: false,
    });
    btn_prev.on("click", function() {
      slider.slick("slickPrev");
    });
    btn_next.on("click", function() {
      slider.slick("slickNext");
    });
  }
});
