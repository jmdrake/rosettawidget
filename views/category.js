$(document).ready(function () {
    if ((match = location.href.match(/\?category=(\w*)/)) != null) {
        var categoryname = decodeURI(location.href.split("=")[1]);
        var categorynumber = findcat(categoryname);
        if(categorynumber == -1) {
            $("#category").html(categoryname + " not found")
        } else {
            $("#category").html(categoryname);
            $("#subcategories").html("");
            for(var i=0; i < categories[categorynumber].subcategories.length; i++) {
                subcategory = categories[categorynumber].subcategories[i];
                $("#subcategories").append("<li><a href='subcategory.html?subcategory=" + subcategory + "'>" + subcategory + "</a></li>");
            }            
        }
    } 
});

function findcat(categoryname) {
    for(var i = 0; i < categories.length; i++)
        if(categories[i].category == categoryname)
            return i;
    return -1;
}