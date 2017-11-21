var slides = [
	{"bannerimage" : "bannerdj.png", "title" : "DJs", "text" : "You only sound as good as your equipment.", "link":"padj.html"},
	{"bannerimage" : "bannerwedding.png", "title" : "Weddings", "text" : "We have everything you need for your special day.", "link":"pawedding.html"},
	{"bannerimage" : "bannercorporatesound.png", "title" : "Corporate Meetings", "text" : "Make your best first impression.", "link":"pacorporate.html"}			
];

$(document).ready(function () {
	$("#slideshow").load("components/slide.html", function () {
		var slidetemplate = cloneDiv($("#tmplSlide"));
		$("#slidelist").html("");
		populateDivList($("#slidelist"), slides, slidetemplate, { "imagepath": "../images/", "linkpath":"" });
		$(".component").attr("contenteditable", true);
	});
	
	$("#saveedits").click(
		function(){
			$(".component").each(function(){
				doc = div2json($(this), slidemodel);
				if(doc._id==undefined) {
					doc._id=Date.now().toString();
					insertComponent(doc, function(res){
						console.log(res);
					});
				} else {
					updateComponent(doc, function(res){
						console.log(res);
					});					
				}
			});
		});
});



