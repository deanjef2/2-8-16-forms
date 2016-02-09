$(document).ready(function() {
  $("button#darkbglighttxt").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
    $("body").addClass("white-text");
  });
  $("button#rv").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
    $("body").addClass("black-text");
  });

  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });

  $("p").click(function() {
   $("p").addClass("highlight");
   $("p").addClass("border");
 });



});
