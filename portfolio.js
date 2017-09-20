$(document).on('ready', function() {
 $(".center").slick({
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 6,
  slidesToScroll: 1
});
});

document.addEventListener("DOMContentLoaded", function() {

  	var design = document.getElementById("design");
  	design.addEventListener("click", function() {
  	design.style.display= "inline-block";
});
});
