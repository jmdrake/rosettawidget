var PouchDB = require("pouchdb");

PouchDB.plugin(require('pouchdb-find'));

var reservations = new PouchDB("https://lembenslymencedderyoutst:3525b04add4d7190303d9b7c74ccb4a664a8cd34@visionpartners.cloudant.com/jamreservations");

exports.addReservation = function(reservation, callback){
    reservations.put(reservation).then(function(results){
        callback(results)
    }).catch(function(err){callback(err); console.log(err)});
}

exports.deleteReservation = function(reservation, callback){
    reservations.get(reservation["_id"]).then(function(doc){
       reservations.remove(doc) 
    });
}

exports.updateReservation = function(reservation, callback){
    reservations.put(reservation).then(function(results){
        callback(results)
    }).catch(function(err){callback(err); console.log(err)});
}

exports.getItemReservations = function(item, callback){
    reservations.find({
        selector: {
            item : item
        }
    }).then(function(res){
        callback(res)
    }).catch(function(err){callback(err); console.log(err)});
}

exports.getUserReservations = function(user, callback){
    reservations.find({
        selector: {
            user : user
        }
    }).then(function(res){
        callback(res)
    }).catch(function(err){callback(err); console.log(err)});
}

