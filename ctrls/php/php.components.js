function getComponents(page, template, callback){
    $.get("../ctrls/php/getComponents.php?template=" + template + "&page=" + page, function (results) {        
        callback (JSON.parse(results)[0]);
    })
}