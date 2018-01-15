function cloneDiv(template, record, options){
    var newDiv = template.clone();
    json2div(newDiv, record, options);
    return newDiv
}

function populateDivList(div, data, template, options){
	if(options != undefined) {
		var callback = options["callback"];		
		var prepend = options["prepend"];
	}	    
   var newDiv;
   for (var i = 0; i < data.length; i++) {
		newDiv = cloneDiv(template, data[i], options);
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

function populateComponents(div, data, template, options){
   var newDiv;
   for (var i = 0; i < data.length; i++) {
		newDiv = cloneDiv(template, JSON.parse(data[i]), options);
		div.append(newDiv);
	}
}