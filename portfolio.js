$(document).on('ready', function() {
 $(".center").slick({
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 5,
  slidesToScroll: 1
});
});

function myFunction() {
	var x = document.getElementById("ds");
    if (x.style.visibility === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
