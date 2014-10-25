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
		else
			countHit( inputLetter );

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

		var expectedLetter = $( '.output span.underline' ).text( );
		if( expectedLetter != ' ' )
			countMiss( expectedLetter );
		
		$( '.output span.underline' ).addClass( 'red' );
	}

}