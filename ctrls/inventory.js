function getCategoryItems(category, callback){
    $.get("../ctrls/php/getCategoryItems.php?category=" + category, function (results) {        
        callback (JSON.parse(results));
    })
}

function getItem(id, callback){
    $.get("../ctrls/php/getItem.php?id=" + id, function (results) {        
        callback (JSON.parse(results)[0]);
    })
}