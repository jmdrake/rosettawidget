$(document).ready(function(){
    $(".leftbutton").click(function(){
      if($(this).parent().parent().find(".w3-white").css("height")=="500px"){
        $(this).parent().parent().find(".w3-white").css("height", "100%")
      } else {
        $(this).parent().parent().find(".w3-white").css("height", "500px")
      }        
    });
  
    $(".rightbutton").click(function(){
        alert("Make Reservation")
    });  
});