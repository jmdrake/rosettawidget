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

function readURL(input, previewimg) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            previewimg.attr('src', e.target.result);
            console.log(previewimg);
        }
        reader.readAsDataURL(input.files[0]);
    }
}


function btnSave(e){
    var component = e.parent().parent();
    var componentid = component.find("#_id").val();
    var data = div2json(component, cardmodel, {"imagepath":"../images/weddings/"});
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
