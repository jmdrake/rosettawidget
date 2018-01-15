$(document).ready(function () {
	$("#cardtemplate").load("./components/card.html", function(){
		getComponents("wedding", "card", function(results){
			populateComponents($("#cards"), results, $("cardtemplate"));            
		});        
	});
});

