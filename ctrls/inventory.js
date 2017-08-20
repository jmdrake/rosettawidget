function getCategoryItems(category, callback){
    $.get("../ctrls/php/getCategoryItems.php?category=" + category, function (results) {        
        callback (JSON.parse(results));
    })
}

function getItem(item, callback){
    $.get("../ctrls/php/getItem.php?item=" + item, function (results) {        
        callback (JSON.parse(results));
    })
}