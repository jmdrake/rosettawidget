var slides = [
	{"bannerimage" : "bannerdj.png", "title" : "DJs", "text" : "You only sound as good as your equipment."},
	{"bannerimage" : "bannerwedding.png", "title" : "Weddings", "text" : "We have everything you need for your special day."},
	{"bannerimage" : "bannercorporatesound.png", "title" : "Corporate Meetings", "text" : "Make your best first impression."}			
];

$(document).ready(function(){
   $("#slideshow").load("slideshow.html", function(){		 
		 var slidetemplate = cloneDiv($("#tmplSlide"));
		 $("#slidelist").html("");
		 populateDivList($("#slidelist"), slides, slidetemplate, {"imagepath" : "../images/"});
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


