var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


$(document).ready(function () {

  window.addEventListener('scroll', function(){
    var nav = document.querySelector('nav');
    nav.classList.toggle('abajo' , window.scrollY>0);
});


$("a").on('click', function(event) {  
    
  if (this.hash !== "") {    
    event.preventDefault();   
    var hash = this.hash;   
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){      
      window.location.hash = hash;
    });
  };
});

});

