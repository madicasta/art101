/*
 * Author: Madisen Castaneda <mcorreac@ucsc.edu>
 * Created 11 May 2022
 * License: Public Domain
 */


 $("#butt1").click(function(){
	$("#text").toggleClass("selected");
  var name = $("#my-input").val();
  $("#content").css({"height" : "1250px"});
  $("#change").html("Who are you really?");
  $("#butt1").html("Do you think you're real");
  $("#h2").html("Existential Crisis");
  $("#h3").html("Solipsism");
  $("#results").html("Solipsism (/ˈsɒlɪpsɪzəm/; from Latin solus 'alone', and ipse 'self')[1] is the philosophical idea that only one's mind is sure to exist. As an epistemological position, solipsism holds that knowledge of anything outside one's own mind is unsure; the external world and other minds cannot be known and might not exist outside the mind.")
  $("#crisis").html("In psychology and psychotherapy, existential crises are inner conflicts characterized by the impression that life lacks meaning. Some authors also emphasize confusion about one's personal identity in their definition. Existential crises are accompanied by anxiety and stress, often to such a degree that they disturb one's normal functioning in everyday life and lead to depression. Their negative attitude towards life and meaning reflects various positions characteristic of the philosophical movement known as existentialism. Synonyms and closely related terms include existential dread, existential vacuum, existential neurosis, and alienation. The various aspects associated with existential crises are sometimes divided into emotional, cognitive, and behavioral components. Emotional components refer to the feelings they provoke, such as emotional pain, despair, helplessness, guilt, anxiety, and loneliness. Cognitive components encompass the problem of meaninglessness, the loss of personal values, and reflections about one's own mortality. Outwardly, existential crises often express themselves in addictions, anti-social and compulsive behavior. The specific symptoms can vary a lot from case to case. Theorists try to address this by distinguishing between different types of existential crises.");
  $("h3").html("Do you ever ponder regarding that you will never know who is a real person and who isn't, " + name);

});
