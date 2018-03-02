function addReservation(reservation, callback){
    $.post("/addReservation`", reservation, function (results) {        
        callback (results);
    })
}

function deleteReservation(reservation, callback){
    $.post("/deleteReservation`", reservation, function (results) {        
        callback (results);
    })
}

function updateReservation(reservation, callback){
    $.post("/updateReservation`", reservation, function (results) {        
        callback (results);
    })
}

function getItemReservations(item, callback){
    $.get("/getItemReservations?item=" + item, function(results){
        callback(results);
    })
}