$(document).ready(function () {
    $("#cardtemplate").load("./components/card.html", function(){
        getComponents("wedding", "card", function(results){
            populateComponents($("#cards"), results, $("cardtemplate"));            
        });
        
        getCards(function(results){
           if(!results["error"]){
               populateDivList($("#cards"), results, $("#cardtemplate"));
           }
       }) 
    });
});

