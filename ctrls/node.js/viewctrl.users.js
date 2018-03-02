function register(userinfo, callback){
  $.post("registerUser", userinfo, function (results) {        
    callback (results);
  })
}

function login(logininfo, callback) {
  $.post("loginUser", logininfo, function(results) {
    callback (results);
  })
}

function logout(callback) {
  $.get ("logoutUser", function(results) {
    callback (results);
  })
}

function getCurrentUserInfo(callback) {
    $.get("getCurrentUserInfo", function (results) {
        if (results.trim().length > 0) {
            callback(JSON.parse(results.trim())[0]);
        } else {
            callback("");
        }
    })  
}