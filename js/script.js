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
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 

window.addEventListener('scroll', function() {
  document.getElementById('showScroll').innerHTML = pageYOffset + 'px' + ' ' + document.getElementById('showScroll').getBoundingClientRect().top;
});
var tcontentElements = document.getElementsByClassName('tcontent');

function bruh() {
for(let i = 0; i<tcontentElements.length; i++){
	if(tcontentElements[i].getBoundingClientRect().top < 900){
			tcontentElements[i].classList.add('move');
		}
	}
};

window.addEventListener('scroll', function() {
for(let i = 0; i<tcontentElements.length; i++){
	if(tcontentElements[i].getBoundingClientRect().top < 900){
			tcontentElements[i].classList.add('move');
		}
	}
});




