$(document).ready(function () {
  $("#header").load("header.html");
  $("#footer").load("footer.html");
  if ($(".owl-carousel").length > 0) {
   $(".hero-slider, .testimonial-slider").owlCarousel({
     loop: true,
     margin: 0,
     nav: false,
     items: 1,
   });
   $(".program-slider, .article-slider").owlCarousel({
     loop: true,
     margin: 0,
     nav: false,
     responsive: {
       0: {
         items: 1.2,
       },
       600: {
         items: 2,
       },
       1000: {
         items: 3,
       },
     },
   });
   $(".accreditation-slider").owlCarousel({
     loop: true,
     items: 2,
     margin: 0,
     responsive: {
       1000: {
         items: 5,
         margin: 30,
       },
     },
   });
  }

  
});
