var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(document).ready(function () {

  window.addEventListener('scroll', function(){
    var nav = document.querySelector('nav');
    nav.classList.toggle('abajo' , window.scrollY>0);
});



})