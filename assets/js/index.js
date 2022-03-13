$(document).ready(function () {

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
  })
  $("#EnviarCorreo").click(function(){
  alert ("el correo fue enviado");
  });
 
    
 

  $("h2").on({ dblclick: function(){ $(this).css("color", "red"); } }); 
  $("h2").on({ click: function(){ $(this).css("color", "#373A3C"); } }); 

  $(".card-title").click(function(){ $(".card-text").toggle(); });


  // Opcional para hacerlas desaparecer individualmente
//   $("#card-title1").click(function(){ $("#card-text1").toggle(); }); 
//   $("#card-title2").click(function(){ $("#card-text2").toggle(); }); 
//   $("#card-title3").click(function(){ $("#card-text3").toggle(); }); 


})

