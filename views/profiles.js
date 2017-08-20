$(document).ready(function(){	
    $("#profiles").load("profiles.html", function(){
        $("#weddingprofile").hover(function(){
        	$("#weddingtext").show();
        	$("#weddingprofile").find("img").css("opacity", ".3")
            }, function(){
            $("#weddingtext").hide();
            $("#weddingprofile").find("img").css("opacity", "1")
        });
        $("#kidprofile").hover(function(){
        	$("#kidtext").show();
        	$("#kidprofile").find("img").css("opacity", ".3")
            }, function(){
            $("#kidtext").hide();
            $("#kidprofile").find("img").css("opacity", "1")
        });    
        $("#djprofile").hover(function(){
        	$("#djtext").show();
        	$("#djprofile").find("img").css("opacity", ".3")
            }, function(){
            $("#djtext").hide();
            $("#djprofile").find("img").css("opacity", "1")
        });
        $("#bandprofile").hover(function(){
        	$("#bandtext").show();
        	$("#bandprofile").find("img").css("opacity", ".3")
            }, function(){
            $("#bandtext").hide();
            $("#bandprofile").find("img").css("opacity", "1")
        });    
        $("#singerprofile").hover(function(){
        	$("#singertext").show();
        	$("#singerprofile").find("img").css("opacity", ".3")
            }, function(){
            $("#singertext").hide();
            $("#singerprofile").find("img").css("opacity", "1")
        });    
        $("#pedalprofile").hover(function(){
        	$("#pedaltext").show();
        	$("#pedalprofile").find("img").css("opacity", ".3")
            }, function(){
            $("#pedaltext").hide();
            $("#pedalprofile").find("img").css("opacity", "1")
        });    
    }); 
});