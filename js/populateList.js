function cloneDiv(template, record, path){
    var newDiv = template.clone();
    json2div(newDiv, record, path);
    return newDiv
}

function populateDivList(div, data, template, options){
	if(options != undefined) {
		var callback = options["callback"];
		var path = options["path"];
		var prepend = options["prepend"];
	}	    
   var newDiv;
   for (var i = 0; i < data.length; i++) {
		newDiv = cloneDiv(template, data[i], path);
		if(prepend == undefined)
			div.append(newDiv);
		else 
			div.prepend(newDiv);
		newDiv.show();
		if(callback != undefined)
			callback(newDiv, data[i]);
	}
}

function populateList(list, data, key){
    var newLI;
    for (var i = 0; i < data.length; i++) {
        newLI = document.createElement("LI");
        newLI.innerHTML = unescape(data[i][key]);
        list.append(newLI);
    }
}
