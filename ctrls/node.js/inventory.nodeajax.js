function getCategoryItems(category, callback){
    $.get("https://ajammanager-jmdrake.c9users.io/getCategoryItems?category=" + category, function (results) {        
        callback (results);
    })
}

function getItem(item, callback){
    $.get("https://ajammanager-jmdrake.c9users.io/getItem?item=" + item, function (results) {        
        callback (results);
    })
}