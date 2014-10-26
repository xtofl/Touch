function showResults( )
{
	for( var key in window.hitTable )
	{
		$( '<td></td>' ).append( $( '<div></div>' ).addClass( 'hit' ) )
		.appendTo( '.results table tr:eq(0)' );
		$( '<td></td>' ).text( key ).appendTo( '.results table tr:eq(1)' );
		$( '<td></td>' ).append( $( '<div></div>' ).addClass( 'miss' ) )
		.appendTo( '.results table tr:eq(2)' );
	}

	$( '.results' ).fadeIn( 1500 );
	setChartBars( 75 );
}

function setChartBars( maxBarHeight )
{
	$( '.upper td, .lower td' ).height( maxBarHeight );

	$( '.results tr:eq(0) td' ).each( function( )
	{
		var thisIndex = $( '.results tr:eq(0) td' ).index( this );
		var letter = $( '.results tr:eq(1) td' ).eq( thisIndex ).text( );

		var max = ( maxMiss( ) < maxHit( ) ) ? maxHit( ) : maxMiss( );

		var hitHeight = Math.floor( window.hitTable[ letter ] * maxBarHeight / max );
		var missHeight = Math.floor( window.missTable[ letter ] * maxBarHeight / max );

		$( this ).children( '.hit' )
			.animate( { height: hitHeight }, 1000 );
		$( '.results tr:eq(2) td' ).eq( thisIndex ).children( '.miss' )
			.animate( { height: missHeight }, 1000 );
	}
	);
}
