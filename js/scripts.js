$(document).ready(function() {
  $("#formOne").submit(function (event) {
    var person1Input= $("input#person1").val();
    var verbInput= $("input#verb").val();
    var exclamationInput= $("input#exclamation").val();
    var adjectiveInput= $("input#adjective").val();

    $(".person1").text(person1Input);
    $(".verb").text(verbInput);
    $(".exclamation").text(exclamationInput);
    $(".adjective").text(adjectiveInput);

    $(".story").show();

    event.preventDefault();
  });
});
