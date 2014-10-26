$( function( )
{

	$( 'body' ).on( 'keypress', keyReact );

	$( '.results button' ).on( 'click', function( )
	{
		$( '.results' ).hide( );
		
		$( '.output' ).text( generateOutput( 5, 5 ) );
		$( '.output' ).underlineLetter( 0 );
		$( '.output' ).fadeIn( 1000 );

		if( !window.hitTable )
			createResultTables( );
		setSessionWordNumber( 5 );

	}
	).click( );

}
);
