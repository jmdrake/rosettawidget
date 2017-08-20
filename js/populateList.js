function cloneDiv(template, record, href){
    var newDiv = template.clone();
    json2div(newDiv, record, href);
    return newDiv
}

function populateDivList(div, data, template, options){
	if(options != undefined) {
		var callback = options["callback"];
		var href = options["href"];
		var prepend = options["prepend"];
	}	    
   var newDiv;
   for (var i = 0; i < data.length; i++) {
		newDiv = cloneDiv(template, data[i], href);
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
