/*
 * Author: Madisen Castaneda <mcorreac@ucsc.edu>
 * Created 30 May 2022
 * License: Public Domain
 */


var endpoint = "https://xkcd.com/info.0.json";
 function getAjax() {
 	$.ajax({
   	url: endpoint,
     type: "GET",
     data: {
     }
   })

   .done(function(comicObj){
   	console.log("Worked!");
     var title = comicObj.title;
     var imgUrl = comicObj.url
    $("#output").append("<h3>" + comicObj.title + "</h3>");
   	$("#output").append("<img src = " + comicObj.img + ">");
   	$("#output").append("<p>" + comicObj.alt + "</p>");
   })
   .fail(function(request, error){
   	$("#output").html("Uh oh, let's try again.");
   })
 }

 $("button").click(getAjax);
