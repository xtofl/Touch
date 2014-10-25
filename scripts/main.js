$( function( )
{
	$( 'body' ).bind( 'keypress', keyReact );

	$( '.output' ).text( generateOutput( 5, 5 ) );
	$( '.output' ).underlineLetter( 0 );

	createMissTable( );
}
);
