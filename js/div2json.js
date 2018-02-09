function div2json(div, model, options) {
	if(options != undefined) {
	    var imagepath = options["imagepath"];
		var linkpath = options["linkpath"];
	}
	var object = {};
    for(var key in model) {
        element = div.find("#" + key);
        if(element.get(0) != undefined) {
            switch(element.get(0).tagName.toUpperCase()){
                case "IMG":
                    value = element.attr("src");
                    if (imagepath && value.split(imagepath)[1]) {
                        value = value.split(imagepath)[1];
                    }
                    break;
                case "INPUT":
                    value = element.val();
                    break;
                case "A":
                    value = element.attr("href" );
                    if (linkpath) {
                        value = value.split(linkpath)[1];
                    }
                    break;
                default:
                    value = element.html();
            }                            
            object[key] = value;            
        } else {
            object[key] = model[key];
        }         
    }
    return object;
}