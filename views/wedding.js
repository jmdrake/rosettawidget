$(document).ready(function () {
	var url = location.href;
	if(url.match(/\?edit/)){
		$("#cardtemplate").load("./components/editcard.html", function(){
			getComponents("card", "wedding", function(results){
				populateDivList($("#cards"), results, $("#cardtemplate"), {"imagepath":"../images/weddings/"});
			});        
		});		
	}
	$("#cardtemplate").load("./components/card.html", function(){
		getComponents("card", "wedding", function(results){
			populateDivList($("#cards"), results, $("#cardtemplate"), {"imagepath":"../images/weddings/"});
		});        
	});
});

