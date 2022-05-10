/*
 * Author: Madisen Castaneda <mcorreac@ucsc.edu>
 * Created 10 May 2022
 * License: Public Domain
 */

// sortUsername - a function that takes user input and sorts the letters of
// their name
var buttonEl = document.getElementById("my-button");
console.log("Button:", buttonEl);

buttonEl.addEventListener("click", function(){
	console.log("Click");
  var inputEl = document.getElementById("my-input");
  var name = inputEl.value;
  console.log("name:", name);
	var goodbyeWorld = document.getElementById("title");
  console.log("title:", goodbyeWorld);
  goodbyeWorld.innerHTML = "Hiya, " + name;

});
