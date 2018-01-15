$(document).ready(function () {
	$("#cardtemplate").load("./components/card.html", function(){
		getComponents("card", "wedding", function(results){
			populateDivList($("#cards"), results, $("#cardtemplate"), {"imagepath":""});
		});        
	});
});

