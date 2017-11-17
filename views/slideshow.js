var slides = [
	{"bannerimage" : "bannerdj.png", "title" : "DJ", "text" : "You need it?  We got it."},
	{"bannerimage" : "bannerwedding.png", "title" : "Weddings", "text" : "We've got you covered."},
	{"bannerimage" : "bannercorporatesound.png", "title" : "Corporate Meetings", "text" : "Professional Look and Sound"}			
];

$(document).ready(function(){
   $("#slideshow").load("slideshow.html", function(){
		 // $("#slidelist").html("");
		 populateDivList($("#slidelist"), slides, $("#tmplSlide"), {"path" : "../images/"});
		 carousel();
	 }); 
});

// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 4000);    
}


