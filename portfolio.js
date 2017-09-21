$(document).on('ready', function() {
 $(".center").slick({
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 5,
  slidesToScroll: 1
});
});

function fdesign() {
	var x = document.getElementById("ds");
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function fcomu() {
  var x = document.getElementById("com");
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function fprog() {
  var x = document.getElementById("prog");
    if (x.style.display === 'none') {
        x.style.display = 'inline';
    } else {
        x.style.display = 'none';
    }
}

function fel() {
  var x = document.getElementById("el");
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

function fmod() {
  var x = document.getElementById("mod");
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}