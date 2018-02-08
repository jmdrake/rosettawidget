$(document).ready(function () {
	$("#cardtemplate").load("./components/editcard.html");
});

function readURL(input, previewimg) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            previewimg.attr('src', e.target.result);
            console.log(previewimg);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

