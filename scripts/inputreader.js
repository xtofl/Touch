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
}

function compareInputAndOutput( inputLetter )
{

	if( inputLetter ==  $( 'span.underline' ).text( ) )
		$( '.output' ).underlineNext( );
	else
		$( 'span.underline' ).appendClass( 'red' );

}