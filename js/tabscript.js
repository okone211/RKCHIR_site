var slideIndex = 1;

 window.onload = function() {
	showSlides(slideIndex);
};


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var texts = document.getElementsByClassName("textsl");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";
	  slides[i].style.display = "none";
	  texts[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  texts[slideIndex-1].style.display = "block";
  slides[slideIndex-1].style.opacity = "1";
  dots[slideIndex-1].className += " active";
} 