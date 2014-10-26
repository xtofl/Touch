$( function( )
{

	$( 'body' ).on( 'keypress', keyReact );

	$( '.results button' ).on( 'click', function( )
	{
		
		$( '.output' ).show( );
		$( '.output' ).text( generateOutput( 5, 5 ) );
		$( '.output' ).underlineLetter( 0 );
		$( '.results' ).hide( );

		if( !window.hitTable )
			createResultTables( );
		setSessionWordNumber( 5 );

	}
	).click( );

}
);
