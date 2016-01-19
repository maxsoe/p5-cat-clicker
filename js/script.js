$(document).ready(function() {
  console.log("document loaded");

  // Cats
  var cat1name = "Sebastian";
  var cat1counter = 0;
  var cat2name = "Tom";
  var cat2counter = 0;

  // Rename cats
  $(".cat1name").text(cat1name);
  $(".cat2name").text(cat2name);

  // Increase counters
  $('.cat1photo').click(function(e) {
    cat1counter++;
    $(".cat1clicks").text(cat1counter);
  });

  $('.cat2photo').click(function(e) {
    cat2counter++;
    $(".cat2clicks").text(cat2counter);
  });

});
