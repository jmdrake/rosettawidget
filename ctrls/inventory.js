function getCategoryItems(category, callback){
    $.get("/getCategoryItems?category=" + category, function (results) {        
        callback (JSON.parse(results));
    })
}

function getItem(item, callback){
    $.get("/getItem?item=" + item, function (results) {        
        callback (JSON.parse(results));
    })
}