function showResults( )
{
	for( var key in window.hitTable )
	{
		var letter = $( '<div></div>' ).attr( 'id', key );
		$( '<div></div>' ).addClass( 'hit' ).appendTo( letter );
		$( '<div></div>' ).addClass( 'letter' ).text( key ).appendTo( letter );
		$( '<div></div>' ).addClass( 'miss' ).appendTo( letter );

		letter.appendTo( '.results' );
	}

	setChartBars( 50 );
}

function setChartBars( maxBarHeight )
{
	$( '.results > div' ).each( function( )
	{
		var letter = $( this ).children( '.letter' ).text( );

		var max = ( maxMiss( ) < maxHit( ) ) ? maxHit( ) : maxMiss( );

		var hitHeight = Math.floor( window.hitTable[ letter ] * maxBarHeight / max );
		var missHeight = Math.floor( window.missTable[ letter ] * maxBarHeight / max );

		$( this ).children( '.hit' ).height( hitHeight );
		$( this ).children( '.miss' ).height( missHeight );
	}
	);
}
