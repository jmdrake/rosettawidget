function register(userinfo, callback){
  $.post("../ctrls/php/register.php", userinfo, function (results) {        
    callback (results);
  })
}

function login(logininfo, callback) {
  $.post("../ctrls/php/login.php", logininfo, function(results) {
    callback (results);
  })
}

function logout(callback) {
  $.get ("../ctrls/php/logout.php", function(results) {
    callback (results);
  })
}

function getCurrentUserInfo(callback) {
    $.get("../ctrls/php/getCurrentUserInfo.php", function (results) {
        if (results.trim().length > 0) {
            callback(JSON.parse(results.trim())[0]);
        } else {
            callback("");
        }
    })  
}