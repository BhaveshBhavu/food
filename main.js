console.log('Hello World!');


 var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides_2");
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












function menu_ff() {
  var g = document.getElementById('menu_5');
  var o = document.getElementById('mn');
 
  g.classList.toggle('menu_css_');
  o.classList.toggle('mnbg');
}

function sr(){
  var gi = document.getElementById('sr');
  
  gi.classList.toggle('gvv');
  
}

/*


var slideIndexU = 1;
showSlides(slideIndexU);

// Next/previous controls
/*
function plusSlides(o) {
  showSlides(slideIndexU += o);
}
*//*
// Thumbnail image controls
function currentSlide(o) {
  showSlides(slideIndexU = o);
}

function showSlides(o) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (o > slides.length) {slideIndexU = 1}
  if (o < 1) {slideIndexU = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexU-1].style.display = "block";
  dots[slideIndexU-1].className += " active";
}




/*
function menu_ff(){
  var g  = document.getElementById('menu_5');

g.classList.toggle("menu_css_");
/*
 var av = document.getElementById('menu_5')
  
  
  av.classList.toggle('menu_css_');
  

 /*  
   document.getElementById('bovug'). style.backgroundColor='red';
  
  
  
}*/

