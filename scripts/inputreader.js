function keyReact( event )
{
	$( '.output' ).text( $( '.output' ).text( ) + String.fromCharCode( event.which ) );
}
