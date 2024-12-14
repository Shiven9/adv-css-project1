document.addEventListener("DOMContentLoaded", () => {
  console.log("Automoblox microsite loaded.");
});

var myCarousel = document.querySelector("#carCarousel");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  ride: "carousel",
});
