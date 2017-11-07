$(document).ready(function () {
	if ((match = location.href.match(/\?package=(\w*)/)) != null) {
		console.log(match);
		getCurrentUserInfo(function(userinfo){
			console.log(JSON.stringify(userinfo));
    }); 
	}
});
