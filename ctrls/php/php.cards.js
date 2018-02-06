function getCards(callback){
    $.get("../ctrls/php/getCards.php", function (results) {        
        callback (JSON.parse(results));
    })
}

function addCard(carddata, callback) {
    $.put("../ctrls/php/addCard.php", carddata, function(results){
        callback (JSON.parse(results));
    })
}

function updateCard(carddata, callback) {
    $.put("../ctrls/php/addCard.php", carddata, function(results){
        callback (JSON.parse(results));
    })
}

function deleteCard(carddata, callback) {
    $.put("../ctrls/php/addCard.php", carddata, function(results){
        callback (JSON.parse(results));
    })
}

