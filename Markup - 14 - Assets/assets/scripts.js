$(document).ready(function(){
 

    
    //add a task
    document.getElementById("submit").onclick = function(){
      
      var toDo = document.getElementById("text").value;
      
      if(toDo == 0)  
        {
          alert("Please add a task!");
          return false;
        };
      {
        $("ul").append("<li><span class='delete'><i class='fas fa-trash'></i></span> <span class='task__row'>" + toDo + "</span></li>");
        $("#text").val("");  
        return true;
      };
    };
    
    //task is ready 
      $("ul").on("click", "li", function(){
        $(this).toggleClass("done");
        });
    
      
    
    
    //click on trash -> delete the task
         $("ul").on("click", ".delete", function (event) {
      $(this)
       .parent()
       .animate({left:"300px", opacity:"0"}, function(){  
        $(this).remove();
        });
       event.stopPropagation();
        });
});



    
  
  
  
  
  
  
  
    