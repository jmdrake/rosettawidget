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
	 }); 
});



