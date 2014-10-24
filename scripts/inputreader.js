function keyReact( event )
{
	if( event.which == 13 )
		enterReact( );
	else
		$( '.output' ).text( $( '.output' ).text( ) + String.fromCharCode( event.which ) );
}

function enterReact( )
{
	$( '.output' ).text( '' );
}
