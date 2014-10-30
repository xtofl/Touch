$( function( )
{
	setTouchOptions( 5, 5, 1 );
	setOptionsView( 191, 146 );
	bindOptions( );

	$( '.results button' ).on( 'click', function( )
	{
		$( '.results' ).hide( );
		$( '.results td' ).remove( );
		
		$( 'body' ).on( 'keypress', keyReact );

		var wordLength = window.touchOptions.wordLength;
		var wordRepeat = window.touchOptions.wordRepeat;

		$( '.output' ).text( generateOutput( wordLength, 5, wordRepeat ) );
		$( '.output' ).underlineLetter( 0 );
		$( '.output' ).fadeIn( 1000 );

		if( !window.hitTable )
			createResultTables( );
		setSessionWordNumber( window.touchOptions.wordNumber );

	}
	).click( );

}
);
