function getCategoryItems(category, callback){
    $.get("getCategoryItems?category=" + category, function (results) {        
        callback (results);
    })
}

function getItem(item, callback){
    $.get("getItem?item=" + item, function (results) {        
        callback (results);
    })
}