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

		if( inputLetter == ' ' )
			wordWasWritten( );

		if( $( '.output span:last' ).text( ) == '' )
		{
			wordWasWritten( );
			enterReact( );
		}

		if( endOfSession( ) )
		{
			$( '.output' ).hide( );
			showResults( );
		}
	}
	else
	{
		if( $( '.output span:first' ).text( ) == '' && inputLetter == ' ' )
			return;

		countMiss( $( '.output span.underline' ).text( ) );
		$( '.output span.underline' ).addClass( 'red' );
	}

}