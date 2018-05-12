$(document).ready(function () {
  $('.sidenav').sidenav();
});

$('.dropdown-trigger').dropdown();

/* SLIDER INTRO */
$(document).ready(function () {
  $(".carousel").carouFredSel({
    responsive: true,
    width: "100%",
    circular: true,
    scroll: {
      item: 1,
      duration: 1000,
      pauseOnHover: true
    },
    auto: true,
    items: {
      visible: {
        min: 1,
        max: 1
      },
      height: "variable"
    },
    pagination: {
      container: ".sliderpagnation",
      anchorBuilder: false
    }
  });
});

$(document).ready(function () {
  $('select').formSelect();
});

