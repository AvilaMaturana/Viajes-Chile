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


$("#cardUno").hover(function(){
  $(this).css({    
    "background-color": "#8b8c89"
  });
});

$("#cardUno").on("click", function(){
  $(this).css({    
    "background-color": "#6096ba"
  });
});

$("#cardDos").hover(function(){
  $(this).css({    
    "background-color": "#8b8c89"
  });
});

$("#cardDos").on("click", function(){
  $(this).css({    
    "background-color": "#6096ba"
  });
});

$("#cardTres").hover(function(){
  $(this).css({    
    "background-color": "#8b8c89"
  });
});

$("#cardTres").on("click", function(){
  $(this).css({    
    "background-color": "#6096ba"
  });
});


$("#cardCuatro").hover(function(){
  $(this).css({    
    "background-color": "#8b8c89"
  });
});

$("#cardCuatro").on("click", function(){
  $(this).css({    
    "background-color": "#6096ba"
  });
});



});

