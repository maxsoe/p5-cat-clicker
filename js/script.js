var counter = 0;

$('#catphoto').click(function(e) {
  counter++;
  $( ".clicks" ).text( counter );
});
