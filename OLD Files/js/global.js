$(document).ready(function (){
    // -------------------------------------------------Global JS

   //Navbar hover effects
    $("#project-nav").hover(
      function(){
        $("#project-nav").addClass("hover-nav");
      }, function(){
        $("#project-nav").removeClass("hover-nav");
      }
    );
    $("#about-nav").hover(
      function(){
        $("#about-nav").addClass("hover-nav");
      }, function(){
        $("#about-nav").removeClass("hover-nav");
      }
    );
    $("#contact-nav").hover(
      function(){
        $("#contact-nav").addClass("hover-nav");
      }, function(){
        $("#contact-nav").removeClass("hover-nav");
      }
    );
});