$(document).ready(function() {
  console.log("document loaded");

  // Hide all the cats
  $(".cat1display").hide();
  $(".cat2display").hide();
  $(".cat3display").hide();
  $(".cat4display").hide();
  $(".cat5display").hide();

  // Cats
  var cat1name = "Sebastian";
  var cat1counter = 0;
  var cat2name = "Tom";
  var cat2counter = 0;
  var cat3name = "Felix";
  var cat3counter = 0;
  var cat4name = "Garfield";
  var cat4counter = 0;
  var cat5name = "Heithcliff";
  var cat5counter = 0;

  // Rename cats
  $(".cat1name").text(cat1name);
  $(".cat2name").text(cat2name);
  $(".cat3name").text(cat3name);
  $(".cat4name").text(cat4name);
  $(".cat5name").text(cat5name);

  // click counters
  $('.cat1').click(function(e) {
    cat1counter++;
    $(".cat1clicks").text(cat1counter);
    $(".cat1display").show();
    $(".cat2display").hide();
    $(".cat3display").hide();
    $(".cat4display").hide();
    $(".cat5display").hide();
  });

  $('.cat2').click(function(e) {
    cat2counter++;
    $(".cat2clicks").text(cat2counter);
    $(".cat1display").hide();
    $(".cat2display").show();
    $(".cat3display").hide();
    $(".cat4display").hide();
    $(".cat5display").hide();
  });

  $('.cat3').click(function(e) {
    cat3counter++;
    $(".cat3clicks").text(cat3counter);
    $(".cat1display").hide();
    $(".cat2display").hide();
    $(".cat3display").show();
    $(".cat4display").hide();
    $(".cat5display").hide();
  });

  $('.cat4').click(function(e) {
    cat4counter++;
    $(".cat4clicks").text(cat4counter);
    $(".cat1display").hide();
    $(".cat2display").hide();
    $(".cat3display").hide();
    $(".cat4display").show();
    $(".cat5display").hide();
  });

  $('.cat5').click(function(e) {
    cat5counter++;
    $(".cat5clicks").text(cat5counter);
    $(".cat1display").hide();
    $(".cat2display").hide();
    $(".cat3display").hide();
    $(".cat4display").hide();
    $(".cat5display").show();
  });
});
