function getComponents(template, page, callback){
    $.get("../ctrls/php/getComponents.php?template=" + template + "&page=" + page, function (results) {        
        callback (JSON.parse(results.trim())[0]);
    })
}