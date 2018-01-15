$(document).ready(function () {
	$("#cardtemplate").load("./components/card.html", function(){
		getComponents("card", "wedding", function(results){
			populateComponents($("#cards"), results, $("cardtemplate"));            
		});        
	});
});

