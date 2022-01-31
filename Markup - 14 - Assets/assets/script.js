$(document).ready(function(){

    $('.items_text').hover(
        function() {
          $(this).css("font-size", "1.2rem", "color" , "black");
        }, function() {
          $(this).css("font-size", "0.9rem", "color", "rgba(0,0,0,0.5)");
        }
      );

});