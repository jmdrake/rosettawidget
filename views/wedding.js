$(document).ready(function () {
	var url = location.href;
	if(url.match(/\?edit/)){
		$("#cardtemplate").load("./components/editcard.html", function(){
			getComponents("card", "wedding", function(results){
				populateDivList($("#cards"), results, $("#cardtemplate"), {"imagepath":"../images/weddings/"});
			});        
		});		
	} else {
	    $("#cardtemplate").load("./components/card.html", function(){
		    getComponents("card", "wedding", function(results){
			    populateDivList($("#cards"), results, $("#cardtemplate"), {"imagepath":"../images/weddings/"});
		    });        
	    });
	}
});

function btnSave(e){
    var component = e.parent().parent();
    var componentid = component.find("#_id").val();
    var data = div2json(component, cardmodel, {"imagepath":"../images/weddings/"});
		var input = component.find("#userImage");
		if(input.prop("files")[0]){
			var ext = input.prop("files")[0].name.split(".")[1];	
			var name = "compnent" + componentid + "." + ext;
			data["image"] = name;
			uploadFile(input, name, function(res){
				console.log(res);
			});
		}
    console.log(data);
    
    updateComponent(data, function(results){
        console.log(results);
    });
}

function btnDelete(e){
    var component = e.parent().parent();
    var componentid = component.find("#_id").val();
    console.log("Deleting " + componentid);
    /*
    deleteComponent(componentid, function(results){
        console.log(results);
    });
    */
    component.hide();
}
