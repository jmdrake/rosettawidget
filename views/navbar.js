$(document).ready(function(){
  $("#navbar").load("navbar.html", function(){
    $("#menucolum1").html("");
    $("#menucolum2").html("");
    $("#menucolum3").html("");        
    $("#menucolum4").html("");        

    addCategory("#menucolum1", categories[0]);
    addCategory("#menucolum1", categories[1]);
    addCategory("#menucolum1", categories[2]);

    addCategory("#menucolum2", categories[3]);
    addCategory("#menucolum2", categories[4]);
    addCategory("#menucolum2", categories[5]);

    addCategory("#menucolum3", categories[6]);

    addCategory("#menucolum4", categories[7]);
    addCategory("#menucolum4", categories[8]);
    
    getCurrentUserInfo(function(userinfo){
      if(userinfo){
        $("#fullname").html(userinfo["fullname"]);
        $("#fullname").removeClass("w3-hide");
        var menuitems = JSON.parse(userinfo["menu"]);
        $("#usermenu").html("");
        for(item in menuitems) {
          if(menuitems[item]["link"]){
            var listitem = "<a href='" + menuitems[item]["link"] + "'>" + menuitems[item]["name"] + "</a>";
          } else {
            var listitem = "<a href='#' onclick='" + menuitems[item]["action"] + "'>" + menuitems[item]["name"] + "</a>";
          }
          $("#usermenu").append(listitem);
        }
      }
    });
  }); 
});

var categories = [{"category" : "Guitars", "subcategories" : ["Acoustic Guitars", "Electric Guitars", "Basses", "Other Fretted Instruments"]},
                  {"category" : "Keys & Synths", "subcategories" : ["Pianos", "Synthesizers", "Organs & Leslies"]},
                  {"category" : "Amps & Effects", "subcategories" : ["Acoustic Amps", "Guitar Amps", "Bass Amps", "Keyboard Amps", "Pedals"]},
                  {"category" : "Drums & Percussian", "subcategories" : ["Drum Kits","Cymbal Packs", "Drum Accessories", "Electronic Drums", "Percussion"]},
                  {"category" : "DJ Equipment", "subcategories" : ["DJ & MIDI Controllers", "Drum Machines & Samplers"]},
                  {"category" : "Studio", "subcategories" : ["Interfaces", "Studio Microphones", "Studio Monitors & Headphones"]},
                  {"category" : "Audio", "subcategories" : ["DI’s and Audio Accessories", "Powered Speakers", "Powered Subwoofers", "Passive Speakers", 
                                                            "Passive Subwoofers", "Power Amps", "Portable PA Systems", "Powered Mixers", "Passive Mixers", "Snakes and Processing", 
                                                            "Wired Microphones", "Wireless Microphones"]},
                  {"category" : "Lighting", "subcategories" : ["FX Lighting", "Lasers", "Controllers", "Stage Lighting", "Moving Head Lights"]},
                  {"category" : "Stage & Truss", "subcategories" : ["Staging", "Truss"]}];

var hide_categories = ["Lasers", "Organs & Leslies"];

function addCategory(div, category){
  $(div).append("<a href='category.html?category=" + encodeURI(category["category"]) + "' class='maincategory w3-small'>" + category["category"] + "</a>");
  for(var i=0; i < category["subcategories"].length; i++){
    if(hide_categories.indexOf(category["subcategories"][i])==-1)
      $(div).append("<a href='subcategory.html?subcategory=" + encodeURI(category["subcategories"][i]) + "' class='subcategory w3-small'>" + category["subcategories"][i] + "</a>");
  }
}