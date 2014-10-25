function keyReact( event )
{
	if( event.which == 13 )
		enterReact( );
	else
		compareInputAndOutput( String.fromCharCode( event.which ) );
}

function enterReact( )
{
	$( '.output' ).text( generateOutput( 5, 5 ) );
	$( '.output' ).underlineLetter( 0 );
}

function compareInputAndOutput( inputLetter )
{

	if( inputLetter ==  $( '.output span.underline' ).text( ) )
	{
		$( '.output' ).underlineNext( );
		if( $( '.output span:last' ).text( ) == '' )
			enterReact( );
	}
	else
	{
		if( $( '.output span:first' ).text( ) == '' && inputLetter == ' ' )
			return;
		$( '.output span.underline' ).addClass( 'red' );
	}

}