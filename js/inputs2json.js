function strescape(s) {
    return s.replace(/'/g, "%27").replace(/"/g, "%22").replace(/\n/g, "%0A")
}

function inputs2json(form){
   // console.log($(formname));
    var inputfields = form.find("input");
    // var radiofields = form.find(".w3-radio");
    var json = {};
    for (i = 0; i < inputfields.length; i++) {
        switch(inputfields[i].type) {
            case "radio":
                if (inputfields[i].checked)
                    json[inputfields[i].name] = inputfields[i].value;
                break;
            case "checkbox":
                var name = inputfields[i].name;
                if (json[name] == undefined)
                    json[name] = [];
                if (inputfields[i].checked)
                    json[name][json[name].length] = inputfields[i].value;                
                break;
            default:
                json[inputfields[i].id] = strescape(inputfields[i].value);
        }
    }
        
    var selectfields = form.find("select");
    for (i = 0; i < selectfields.length; i++)
        json[selectfields[i].id] = selectfields[i].value; 

    var textareafields = form.find("textarea");
    for (i = 0; i < textareafields.length; i++)
        json[textareafields[i].id] = strescape(textareafields[i].value);
    
    for(key in json) {
        if(json[key]==null) 
            json[key] ="";
    }
    return json;
}