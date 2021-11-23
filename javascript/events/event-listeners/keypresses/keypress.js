// Event listener for ENTER key:
document.addEventListener( "keypress", function( event ) {
	if ( event.keyCode === 13 || event.which === 13 ) {
		console.log( "ENTER key was pressed!" );
	}
});

// Event listener for alphabet keys only:
document.onkeyup = function( event ) {

		if ( ( event.keyCode >= 65 ) && ( event.keyCode <= 90 ) ) {
			
			// Your code here

		}

	};