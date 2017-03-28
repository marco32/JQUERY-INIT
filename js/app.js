$("#removeDiv").click(function () {
	$( "#remove" ).remove();
});

$("#setColor").click(function () {
	$( "#changeColor" ).addClass("red");
});

$( "#setText" ).keyup(function() {
    var value = $( this ).val();
    $( "#needText" ).text( value );
});
