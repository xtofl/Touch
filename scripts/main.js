$( function( )
{

	$( 'body' ).on( 'keypress', keyReact );

	$( '.results button' ).on( 'click', function( )
	{
		
		$( '.output' ).show( );
		$( '.output' ).text( generateOutput( 5, 5 ) );
		$( '.output' ).underlineLetter( 0 );
		$( '.results' ).children( ).not( 'button' ).remove( );
		$( '.results' ).hide( );

		if( !window.hitTable )
			createResultTables( );
		setSessionWordNumber( 6 );

	}
	).click( );

}
);
